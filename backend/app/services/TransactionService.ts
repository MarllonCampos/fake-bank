import { v4 as uuidv4 } from 'uuid';
import AccountService from "./AccountService";
import db from '../../models'

type UserProperties = {
  username: string;
  password: string;
}


class TransactionService {
  async store(body: UserProperties) {
  }

  async find(username: string) {

  }

  async findAll() {
  }
}


export default new TransactionService();