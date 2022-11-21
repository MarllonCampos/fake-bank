import { getUser, UserProps } from "../../utils/localStorage"


interface TransactionFindAll {
  date: string | undefined;
  filter: string | undefined;
}
interface TransactionStore {
  value: string | number;
  creditedUsername: string;
}
class Transaction {
  private route = `${import.meta.env.VITE_API_URL}/transaction`
  private get token() { return getUser()?.token }

  constructor() {
    console.log(this.token)
  }
  async findAll({ date = "", filter = "" }: TransactionFindAll) {
    const headers = new Headers()
    headers.append("Authorization", `Bearer ${this.token}`)

    const queryParams = `date=${date}${filter && `&filter=${filter}`}`
    const newRoute = `${this.route}?${queryParams}`
    const res = await fetch(newRoute, {
      method: 'GET',
      headers
    })
    const { ok: requestSuccess, status } = res
    const { transactions, message } = await res.json()
    if (!requestSuccess) {
      throw ({ message, requestSuccess, status })
    }
    return { transactions, status: 200 }
  }

  async store({ value, creditedUsername }: TransactionStore) {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    console.log(`${this.token}`, "Transaction Store")
    headers.append("Authorization", `Bearer ${this.token || "X"}`)
    const res = await fetch(this.route, {
      method: 'POST',
      body: JSON.stringify({ value, creditedUsername }),
      headers
    })
    const { ok: requestSuccess, status } = res

    if (!requestSuccess) {

      let message;
      switch (status) {
        case 401:
          message = "You lost connection, please log again"
          break;
        case 406:
          message = "You can't realize transfers to yourself"
          break;
        default:
          console.log(status)
          message = "An error has occurred please contact the I.T Office"
      }

      throw ({ requestSuccess, status, message })
    }
    const { user: { balance: newBalance }, message } = await res.json()

    return { newBalance, message, status: 200 }

  }

}


export default new Transaction()