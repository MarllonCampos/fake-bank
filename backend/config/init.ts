import { Accounts, Transactions, Users } from '../models'
const dbInit = () => {
  Users.sync({ alter: true })
  Accounts.sync({ alter: true })
  Transactions.sync({ alter: true })
}
export default dbInit 