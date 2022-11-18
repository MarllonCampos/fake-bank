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
  date: string;
}
type FilterOptionsOBject = {
  sent: string;
  received: string;
}
type objectFilter = keyof FilterOptionsOBject


class TransactionService {
  async store({ debitedAccountId, creditedAccountId, value }: TransactionProperties, transaction: any) {
    await db.Transactions.create({
      debitedAccountId,
      creditedAccountId,
      value
    }, { transaction })
  }




  async find(userAccountId: string, filterParams: FilterParamsProperties) {
    const { filter, orderBy, date } = filterParams

    const filterOptionsObject = {
      sent: 'debitedAccountId',
      received: 'creditedAccountId',
    }

    const columnName = filterOptionsObject[filter as objectFilter]
    let createdAt;
    if (date) {
      const startDate = new Date(date)
      startDate.setUTCHours(0, 0, 0, 0);

      const finalDate = new Date(startDate)
      finalDate.setUTCHours(23, 59, 59, 999);

      createdAt = {
        [db.Sequelize.Op.between]: [startDate, finalDate]
      }
    }
    const transactions = await db.Transactions.findAll({
      include: [{
        model: db.Accounts,
        include: {
          model: db.Users,
          attributes: ['username'],
        }
      }],
      where: {
        [db.Sequelize.Op.and]: [
          { [columnName]: userAccountId },
          createdAt && { createdAt }
        ]
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
