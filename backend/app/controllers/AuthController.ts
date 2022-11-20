import { Request, Response } from 'express'
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
      return res.status(400).json({ message: 'User not found' })
    }
    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'User not found' })
    }
    const token = jwt.sign({ id: user.id, accountId: user.accountId }, process.env.JWT_SECRET || 'SECRET', { expiresIn: '1d' })
    const accountUser = await db.Accounts.findByPk(user.accountId, {
      attributes: [["id", "accountId"], "balance", [db.Sequelize.col('"User"."id"'), "userId"],
      [db.Sequelize.col('"User"."username"'), "username"]],
      include: [{
        model: db.Users,
        attributes: []
        // attributes: [
        //   { exclude: ["password"] }
        // ]
      }],
    })
    return res.json({
      user: accountUser,
      token
    })
  }
}

export default new AuthController()