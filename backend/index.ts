import express, { NextFunction, Request, Response, } from 'express'
import ApplicationRoutes from './routes'
import dotenv from 'dotenv'
import dbInit from './config/init'
import cors from 'cors'

dotenv.config()

const PORT = process.env.BACKEND_PORT || 3000
dbInit
const server = express();
server.use(express.json())

server.use(cors())
server.get('/', (_req: Request, res: Response) => {
  console.log("GET")
  res.send('Working as it should be')
})
server.use(ApplicationRoutes)

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})
