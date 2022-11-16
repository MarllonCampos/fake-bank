import { Request, Response, Router } from 'express'
import TransactionController from '../app/controllers/TransactionController';
const route = Router();


route.get('/', TransactionController.index)
route.post('/', TransactionController.store)

export default route