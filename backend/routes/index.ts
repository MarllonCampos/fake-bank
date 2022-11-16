import { Request, Response, Router } from 'express'
import User from '../app/database/models/user';
import UserService from '../app/services/UserService';
import UserRouter from './users'

const route = Router();
route.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body
  const user: any = User.findByPk(username)
  await UserService.find({ username: user.username, password })

})

route.use('/user', UserRouter)

export default route