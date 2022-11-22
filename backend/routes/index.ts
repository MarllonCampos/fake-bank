import { Router } from 'express'
import AuthController from '../app/controllers/AuthController';
import UserController from '../app/controllers/UserController';
import authMiddleware from '../app/middlewares/authMiddleware';
import UserRouter from './users'
import TransactionRouter from './transactions'

const route = Router();

// route.post('/login', AuthController.authenticate)
route.post('/user', UserController.store)
// route.use(authMiddleware)
route.use('/user', UserRouter)
route.use('/transaction', TransactionRouter)

export default route