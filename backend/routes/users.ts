import { Router } from 'express'
import UserController from '../app/controllers/UserController';
const route = Router();


route.get('/', UserController.index)

route.get('/:username', UserController.show)




export default route