import jwt from 'jsonwebtoken';
import { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

class TransactionController {

  async store(req: Request, res: Response) {
    const { creditedAccountId } = req.body
    const { userAccountId } = req

    return res.status(201).json({ creditedAccountId, userAccountId })
  }

  async index(req: Request, res: Response) {
    return res.send('ok')
  }
}

export default new TransactionController()