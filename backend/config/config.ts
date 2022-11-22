import { Dialect } from "sequelize"

require('dotenv').config()
export default {

  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": "postgres" as Dialect,
  "define": {
    "timestamps": false
  },
  "logging": true
} as {
  username: string
  password: string
  database: string
  host: string
  dialect: Dialect
  define: any,
}
