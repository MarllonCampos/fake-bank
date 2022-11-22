import { v4 as uuidv4 } from 'uuid'
import { Accounts } from '../../models'

class AccountService {
  async store() {
    const account = await Accounts.create({
      id: uuidv4(),
      balance: 100
    })
    return account
  }

  async find(accountId: string) {
    console.log(accountId)
    const accountInfo = await Accounts.findByPk(accountId)
    if (!accountInfo) throw ('User not found')
    return accountInfo
  }

  async show() {

  }

  async update(accountId: string, newValue: number, transaction?: any) {
    const [row, data] = await Accounts.update({ balance: newValue }, {
      where: {
        id: accountId
      },
      transaction,
      returning: true,
    });
    if (!data) throw new Error('Error trying to change account balance')
    return data[0].balance
  }
}


export default new AccountService();