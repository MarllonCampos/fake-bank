import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { hashPassword, isPasswordValid } from '../utils'


class UserController {

  async store(req: Request, res: Response) {
    const { username, password } = req.body
    if (!username) {
      return res.status(400).json({ message: 'User must have a username' })
    }

    if (!password) {
      return res.status(400).json({ message: 'User must have a password' })
    }

    if (!isPasswordValid(password)) {
      return res.status(400).json({ message: 'Password must have a capital letter, a number and atleast 8 characters' })
    }

    const hashedPassword = await hashPassword(password)
    const user = await UserService.store({ username, password: hashedPassword })

    return res.status(201).json({ message: 'User created successfully' })
  }

  async show(req: Request, res: Response) {
    const { username } = req.params
    const user = await UserService.find(username)
    return res.status(200).json(user)
  }


  async index(req: Request, res: Response) {
    const users = await UserService.findAll()
    return res.status(200).json({ users })
  }
}

export default new UserController()