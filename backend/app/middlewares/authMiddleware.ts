import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface TokenPayload {
  id: string;
  accountId: string;
}
export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(401)
  }
  const token = authorization.replace('Bearer', '').trim()
  console.log(token, "authMiddlewae")
  try {
    const data = jwt.verify(token, "SECRET")
    const { id, accountId } = data as TokenPayload
    console.log(data)
    req.userId = id
    req.userAccountId = accountId
    return next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'You lost connection, please log again' })
  }
}
