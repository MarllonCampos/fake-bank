import { Request, Response, Router } from 'express'
import UserController from '../app/controllers/UserController';
const route = Router();


route.get('/', async (_req: Request, res: Response) => {
  return res.json({ message: await UserController.index() })
})

route.get('/:username', async (req: Request, res: Response) => {
  const { username } = req.params
  return res.json({ message: await UserController.show() })
})
route.post('/', UserController.store)



export default route