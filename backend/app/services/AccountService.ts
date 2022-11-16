import db from '../../models'
import { v4 as uuidv4 } from 'uuid'

class AccountService {
  async store() {
    const account = await db.Accounts.create({
      id: uuidv4()
    })
    return account
  }

  async find() {

  }

  async show() {

  }
}


export default new AccountService();