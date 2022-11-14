import { Sequelize } from 'sequelize';

console.log(process.env.DB_URL)
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
