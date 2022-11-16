import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { hashPassword } from '../utils'
class UserController {

  async store(req: Request, res: Response) {
    const { username, password } = req.body
    if (!username) {
      return res.status(400).json({ message: 'User must have a username' })
    }

    if (!password) {
      return res.status(400).json({ message: 'User must have a password' })
    }

    const hashedPassword = hashPassword(password)
    const user = await UserService.store({ username, password: await hashedPassword })

    return res.status(201).json({ message: 'User created successfully' })
  }

  async show() {
    return 'show user'
  }


  async index() {
    console.log('findAll')
    return 'findAll user'
  }
}

export default new UserController()