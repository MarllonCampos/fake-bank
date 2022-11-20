import { Request, Response } from 'express'
import db from '../../models'
import UserService from '../services/UserService'
import { hashPassword, isPasswordValid } from '../utils'
import AuthController from './AuthController'


class UserController {

  async store(req: Request, res: Response) {
    const { username, password } = req.body
    if (!username) {
      return res.status(400).json({ message: 'User must have a username' })
    }
    if (!password) {
      return res.status(400).json({ message: 'User must have a password' })
    }
    const userExists = await UserService.find(username)
    if (userExists) {
      return res.status(409).json({ message: 'This username has been taken already' })
    }

    if (!username || username.length < 3) {
      return res.status(400).json({ message: 'User must have a username with atleast 3 characters' })
    }



    if (!isPasswordValid(password)) {
      return res.status(400).json({ message: 'Password must have a capital letter, a number and atleast 8 characters' })
    }

    const hashedPassword = await hashPassword(password)
    await UserService.store({ username, password: hashedPassword })
    return AuthController.authenticate(req, res)
  }

  async show(req: Request, res: Response) {
    const { userId } = req
    const user = await db.User.findByPk(userId)
    return res.status(200).json(user)
  }


  async index(req: Request, res: Response) {
    const users = await UserService.findAll()
    return res.status(200).json({ users })
  }
}

export default new UserController()