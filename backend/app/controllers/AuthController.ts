import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import db from '../../models'
dotenv.config()
class AuthController {

  async authenticate(req: Request, res: Response) {
    const { username, password } = req.body
    const formattedUsername = username.toLowerCase();
    const user = await db.Users.findOne({ where: { username: formattedUsername } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }
    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'User not found' })
    }
    const token = jwt.sign({ id: user.id, accountId: user.accountId }, process.env.JWT_SECRET || 'SECRET', { expiresIn: '1d' })
    const responseUser = {
      id: user.id,
      username: user.username,
      accountId: user.accountId
    }

    return res.json({
      user: {
        ...responseUser
      },
      token
    })
  }
}

export default new AuthController()