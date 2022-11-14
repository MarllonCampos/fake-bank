import Account from "../database/models/account";


class AccountService {
  async store() {
    const account = await Account.create()
    return account
  }
  async find() {

  }

  async show() {

  }
}


export default new AccountService();