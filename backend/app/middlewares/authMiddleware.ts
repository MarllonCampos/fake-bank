import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

interface TokenPayload {
  id: string;
  accountId: string;
  iat: number;
  exp: number;
}
export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || "SECRET")
    const { id, accountId } = data as TokenPayload
    req.userId = id
    req.userAccountId = accountId
    return next()
  } catch {
    return res.status(401).json({ message: 'You lost connection, please log again' })
  }
}