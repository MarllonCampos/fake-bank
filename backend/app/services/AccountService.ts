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
    console.log(accountId)
    const accountInfo = await db.Accounts.findByPk(accountId)
    console.log(accountInfo.balance)
    if (!accountInfo) throw ('User not found')
    return accountInfo
  }

  async show() {

  }

  async update(accountId: string, newValue: number, transaction?: any) {
    const [row, data] = await db.Accounts.update({ balance: newValue }, {
      where: {
        id: accountId
      },
      transaction,
      returning: true,
      plain: true
    });
    if (!data) throw new Error('Error trying to change account balance')
    return data.balance
  }
}


export default new AccountService();