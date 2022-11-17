import { Request, Response } from 'express'
import dotenv from 'dotenv'
import AccountService from '../services/AccountService';
import UserService from '../services/UserService';
import db from '../../models';
import TransactionService from '../services/TransactionService';
dotenv.config()

class TransactionController {

  async store(req: Request, res: Response) {
    const { creditedUsername, value } = req.body
    const { userAccountId } = req
    if (!creditedUsername) {
      return res.status(400).json({ message: "Must have a username to transaction" })
    }
    if (!value) {
      return res.status(400).json({ message: "Must have a value" })
    }
    if (value <= 0) {
      return res.status(400).json({ message: "Value must by greater than 0" })
    }
    const creditedUser = await UserService.find(creditedUsername)

    if (!creditedUser) {
      return res.status(404).json({ message: "Username not found" })
    }
    const transaction = await db.sequelize.transaction();

    try {
      const creditedUserAccount = await AccountService.find(creditedUser.accountId)

      if (!creditedUserAccount) {
        return res.status(404).json({ message: "User not found" })
      }

      const accountUser = await AccountService.find(userAccountId)
      if (accountUser.id === creditedUserAccount.id) {
        return res.status(406).json({ message: "You can't transfer to yourself" })
      }
      const debitedUserBalance = accountUser.balance

      if (debitedUserBalance < value) {
        return res.status(401).json({ message: "Insufficient funds" })
      }
      const newDebitedUserBalance = debitedUserBalance - value

      console.log(newDebitedUserBalance)

      const userNewBalance = await AccountService.update(userAccountId, newDebitedUserBalance, transaction)

      const newCreditedUserBalance = creditedUserAccount.balance + value
      await AccountService.update(creditedUserAccount.id, newCreditedUserBalance, transaction)

      await TransactionService.store({ debitedAccountId: accountUser.id, creditedAccountId: creditedUserAccount.id, value }, transaction)

      transaction.commit()


      return res.status(201).json({ message: "Your transaction's complete", user: { balance: userNewBalance } })

    } catch (error) {
      transaction.rollback()
      console.log(error)
      return res.status(400).json({ error })
    }
  }

  async index(req: Request, res: Response) {
    return res.send('ok')
  }
}

export default new TransactionController()