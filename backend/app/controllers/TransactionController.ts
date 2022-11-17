import { Request, Response } from 'express'
import dotenv from 'dotenv'
import AccountService from '../services/AccountService';
import UserService from '../services/UserService';
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
    const creditedUser = await UserService.find(creditedUsername)

    if (!creditedUser) {
      return res.status(404).json({ message: "Username not found" })
    }

    try {
      const creditedUserAccount = await AccountService.find(creditedUser.accountId)

      if (!creditedUserAccount) {
        return res.status(404).json({ message: "User not found" })
      }

      const accountUser = await AccountService.find(userAccountId)
      const debitedUserBalance = accountUser.balance

      if (debitedUserBalance < value) {
        return res.status(401).json({ message: "Insufficient funds" })
      }
      const newDebitedUserBalance = debitedUserBalance - value

      console.log(newDebitedUserBalance)

      await AccountService.update(userAccountId, newDebitedUserBalance)

      const newCreditedUserBalance = creditedUserAccount.balance + value
      await AccountService.update(creditedUserAccount.id, newCreditedUserBalance)

      return res.status(201).json({ message: "Your transaction's complete" })

    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  async index(req: Request, res: Response) {
    return res.send('ok')
  }
}

export default new TransactionController()