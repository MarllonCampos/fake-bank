import { v4 as uuidv4 } from 'uuid';
import AccountService from "./AccountService";
import db from '../../models'

type TransactionProperties = {
  debitedAccountId: string;
  creditedAccountId: string;
  value: number
}


class TransactionService {
  async store({ debitedAccountId, creditedAccountId, value }: TransactionProperties, transaction: any) {
    await db.Transactions.create({
      debitedAccountId,
      creditedAccountId,
      value
    }, { transaction })
  }

  async find(username: string) {

  }

}


export default new TransactionService();