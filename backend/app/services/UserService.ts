import { v4 as uuidv4 } from 'uuid';
import AccountService from "./AccountService";
import db from '../../models'

type UserProperties = {
  username: string;
  password: string;
}


class UserService {
  async store(body: UserProperties) {

    const account = await AccountService.store()
    const user = await db.Users.create({
      id: uuidv4(),
      username: body.username,
      password: body.password,
      accountId: account.id
    })


    return user
  }
  async find(username: string) {
    const user = await db.Users.findOne({ where: { username }, attributes: ['username', 'accountId'] });
    return user
  }

  async findAll() {
    return await db.Users.findAll({ attributes: ["username", "accountId"] })
  }
}


export default new UserService();