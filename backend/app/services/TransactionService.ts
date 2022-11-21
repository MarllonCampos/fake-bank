import db from '../../models'
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
    await db.Transactions.create({
      debitedAccountId,
      creditedAccountId,
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
        [db.Sequelize.Op.between]: [startDate, finalDate]
      }
    }
    let transactionSentRaw, transactionReceivedRaw, transactionSent, transactionReceived
    if (filter === "sent" || filter == "") {
      transactionSentRaw = await db.Transactions.findAll({
        include: [{
          model: db.Accounts,
          as: 'debited',
          include: {
            model: db.Users,
          }
        }],
        where: {
          [db.Sequelize.Op.and]: [
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
        username: transaction.debited.User.username
      }))
    }

    if (filter === "received" || filter == "") {
      transactionReceivedRaw = await db.Transactions.findAll({
        include: [{
          model: db.Accounts,
          as: 'credited',
          include: {
            model: db.Users,
          }
        }],
        where: {
          [db.Sequelize.Op.and]: [
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





