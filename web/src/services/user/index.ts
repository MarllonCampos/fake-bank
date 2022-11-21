import { AccountObject } from "../../components/UserForm"

class User {
  private route = `${import.meta.env.VITE_API_URL}/user`
  async createUser(user: AccountObject) {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    const res = await fetch(this.route, {
      method: 'POST',
      body: JSON.stringify(user),
      headers
    })
    const { ok: requestSuccess, status } = res
    const { token, ...data } = await res.json()
    console.log({ token })
    if (!requestSuccess) {
      const { message } = data

      throw ({ message, requestSuccess, status })
    }

    const { user: userInfo } = data
    return { userInfo, token }
  }


  async login(user: AccountObject) {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers
    })
    const { ok: requestSuccess, status } = res
    const { token, ...data } = await res.json()

    if (!requestSuccess) {
      const { message } = data

      throw ({ message, requestSuccess, status })
    }

    const { user: userInfo } = data
    return { userInfo, token }
  }
}



export default new User()
