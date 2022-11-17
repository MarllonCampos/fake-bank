import db from '../../models'
import { v4 as uuidv4 } from 'uuid'

class AccountService {
  async store() {
    const account = await db.Accounts.create({
      id: uuidv4()
    })
    return account
  }

  async find(accountId: string) {
    const accountInfo = await db.Accounts.findByPk(accountId)
    if (!accountInfo) throw new Error('User not found')
    return accountInfo
  }

  async show() {

  }

  async update(accountId: string, newValue: number) {
    const [columnsChanged] = await db.Accounts.update({ value: newValue }, {
      where: {
        id: accountId
      }
    });
    if (columnsChanged < 1) throw new Error('Error trying to update account')
    return columnsChanged
  }
}


export default new AccountService();