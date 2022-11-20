import express, { NextFunction, Request, Response, } from 'express'
import ApplicationRoutes from './routes'
import dotenv from 'dotenv'
import db from './models'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 3000
db.sequelize.sync({ alter: true }).then(() => { // Using this because node doesnt have top level await
  const server = express();
  server.use(express.json())

  server.use(cors())
  server.get('/', (_req: Request, res: Response) => {
    res.send('Working as it should be')
  })
  server.use(ApplicationRoutes)

  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
  })
})
