import { getCookie } from "../../utils/cookies"


interface TransactionFindAll {
  date: string | undefined;
  filter: string | undefined;
}
class Transaction {
  private route = `${import.meta.env.VITE_API_URL}/transaction`
  private token = getCookie()
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

}


export default new Transaction()