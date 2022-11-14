import { Request, Response } from 'express'
import UserService from '../services/UserService'
class UserController {

  async store(req: Request, res: Response) {
    const { body } = req

    if (!body.username) {
      return res.status(400).json({ message: 'User must have a username' })
    }

    if (!body.password) {
      return res.status(400).json({ message: 'User must have a password' })
    }

    const user = await UserService.store(body)

    return res.status(201).json({ message: 'User created successfully', user })
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