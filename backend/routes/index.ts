import { Router } from 'express'
import UserRouter from './users'

const route = Router();


route.use('/user', UserRouter)

export default route