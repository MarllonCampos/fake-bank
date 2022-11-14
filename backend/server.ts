import express, { Router } from 'express'

const PORT = process.env.PORT || 3000
const server = express();
const route = Router();

server.use(express.json())
route.get('/', (_req, res) => {
  res.send('Working as it should be')
})


server.use(route)


server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})