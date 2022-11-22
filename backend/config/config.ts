import { Dialect, Sequelize } from 'sequelize'
require('dotenv').config()

const dbUser = process.env.DB_USER as string
const dbPassword = process.env.DB_PASS
const dbName = process.env.DB_NAME as string
const dbHost = process.env.DB_HOST
const dbDriver = "postgres"

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

export default sequelizeConnection
