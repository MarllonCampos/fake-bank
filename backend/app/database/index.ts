import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const database = new Sequelize(process.env.DB_URL || '', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  },

})

database
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch(() => console.error("An error occurred connecting to the server!"));


export default database