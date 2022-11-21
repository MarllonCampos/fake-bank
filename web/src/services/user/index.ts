import { AccountObject } from "../../components/UserForm"
import { saveCookie } from "../../utils/cookies"

class User {
  private route = `${import.meta.env.BASE_URL}:3000/user`
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

    if (!requestSuccess) {
      const { message } = data

      throw ({ message, requestSuccess, status })
    }

    saveCookie(token, token)
    const { user: userInfo } = data
    return userInfo
  }


  async login(user: AccountObject) {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    const res = await fetch("http://127.0.0.1:3000/login", {
      method: 'POST',
      body: JSON.stringify(user),
      headers
    })
    const { ok: requestSuccess } = res
    const { token, ...data } = await res.json()

    if (!requestSuccess) {
      const { message } = data

      throw ({ message, requestSuccess })
    }

    saveCookie(token, token)
    const { user: userInfo } = data
    return userInfo
  }
}



export default new User()
