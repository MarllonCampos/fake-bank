import { Request, Response } from 'express'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Accounts, Users } from '../../models'
import { col } from 'sequelize'
dotenv.config()
class AuthController {

  async authenticate(req: Request, res: Response) {
    const { username, password } = req.body
    const formattedUsername = username.toLowerCase();
    const user = await Users.findOne({ where: { username: formattedUsername } });

    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'User not found' })
    }
    const userId = user.id
    const userAccountId = user.accountId

    const token = jwt.sign({ id: user.id, accountId: userAccountId }, "SECRET", { expiresIn: '1d' })
    const accountUser = await Users.findByPk(user.id, {
      attributes: [["id", "userId"], "username", "accountId", [col('"Account"."balance"'), "balance"]],
      include: {
        model: Accounts,
        attributes: ['balance']
      }
    })
    console.log({ token });

    return res.json({
      user: accountUser,
      token
    })
  }
}

export default new AuthController()