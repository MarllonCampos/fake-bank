import { v4 as uuidv4 } from 'uuid';
import AccountService from "./AccountService";
import db from '../../models'

type TransactionProperties = {
  debitedAccountId: string;
  creditedAccountId: string;
  value: number
}

type FilterParamsProperties = {
  orderBy: string;
  filter: string;
}


class TransactionService {
  async store({ debitedAccountId, creditedAccountId, value }: TransactionProperties, transaction: any) {
    await db.Transactions.create({
      debitedAccountId,
      creditedAccountId,
      value
    }, { transaction })
  }


  async find(userAccountId: string, filterParams: FilterParamsProperties) {
    const { filter, orderBy } = filterParams

    const filterOptionsObject = {
      sent: 'debitedAccountId',
      received: 'creditedAccountId',
    }
    if (filter === 'sent') { }
    const operator = 'x';
    const transactions = await db.Transactions.findAll({
      include: [{
        model: db.Accounts,
        include: {
          model: db.Users,
          attributes: ['username'],
        }
      }],
      where: {
        debitedAccountId: {
          userAccountId
        }
      },
      order: [['createdAt', orderBy]],
      attributes: ['value', 'createdAt', 'debitedAccountId']
    })

    return transactions.map((transaction: any) => ({
      value: transaction.value,
      time: transaction.createdAt,
      username: transaction.Account.User.username
    }))

  }

}


export default new TransactionService();