import { Accounts, Transactions, Users } from "../../models";
import { Op } from 'sequelize'
type TransactionProperties = {
  debitedAccountId: string;
  creditedAccountId: string;
  value: number
}

type FilterParamsProperties = {
  filter: string;
  date: string;
}
type FilterOptionsObject = {
  sent: string;
  received: string;
}
type objectFilter = keyof FilterOptionsObject
type asOptionsObject = {
  sent: string;
  received: string;
}
type asOption = keyof FilterOptionsObject


class TransactionService {
  async store({ debitedAccountId, creditedAccountId, value }: TransactionProperties, transaction: any) {
    await Transactions.create({
      creditedAccountId: creditedAccountId || "",
      debitedAccountId: debitedAccountId || "",
      value
    }, { transaction })
  }




  async find(userAccountId: string, filterParams: FilterParamsProperties) {
    const { filter, date } = filterParams

    const filterOptionsObject = {
      sent: 'debitedAccountId',
      received: 'creditedAccountId',
    }

    const asOptions = {
      sent: 'debited',
      received: 'credited'
    }

    const asValue = asOptions[filter as asOption]

    const columnName = filterOptionsObject[filter as objectFilter]
    let createdAt;
    if (date) {
      const startDate = new Date(date)
      startDate.setUTCHours(0, 0, 0, 0);

      const finalDate = new Date(startDate)
      finalDate.setUTCHours(23, 59, 59, 999);

      createdAt = {
        [Op.between]: [startDate, finalDate]
      }
    }
    let transactionSentRaw, transactionReceivedRaw, transactionSent, transactionReceived
    if (filter === "sent" || filter == "") {
      transactionSentRaw = await Transactions.findAll({
        include: [{
          model: Accounts,
          as: 'debited',
          include: [{
            model: Users,
          }]
        }],
        where: {
          [Op.gt]: [
            { debitedAccountId: userAccountId },
            createdAt && { createdAt }
          ]
        },
        attributes: ['value', 'createdAt']
      })

      transactionSent = transactionSentRaw.map((transaction: any) => ({
        value: transaction.value,
        time: transaction.createdAt,
        transactionType: 'debited',
        username: transaction?.debited.User.username
      }))
    }

    if (filter === "received" || filter == "") {
      transactionReceivedRaw = await Transactions.findAll({
        include: [{
          model: Accounts,
          as: 'credited',
          include: [{
            model: Users,
          }]
        }],
        where: {
          [Op.and]: [
            { creditedAccountId: userAccountId },
            createdAt && { createdAt }
          ]
        },
        attributes: ['value', 'createdAt']
      })

      transactionReceived = transactionReceivedRaw.map((transaction: any) => ({
        value: transaction.value,
        time: transaction.createdAt,
        transactionType: 'credited',
        username: transaction.credited.User.username
      }))
    }

    const allTransactionArray = filter == "sent" ? [...transactionSent] : filter === "received" ? [...transactionReceived] : [...transactionSent, ...transactionReceived]
    const allTransactions = allTransactionArray.sort(((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()))
    return allTransactions


  }

}


export default new TransactionService();





