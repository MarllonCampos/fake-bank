import { Request, Response, Router } from 'express'
import UserService from '../app/services/UserService';
import UserRouter from './users'

const route = Router();

// route.use('/user', UserRouter)

export default route