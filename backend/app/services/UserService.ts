import { v4 as uuidv4 } from 'uuid';
import AccountService from "./AccountService";
import { Users } from '../../models';

type UserProperties = {
  username: string;
  password: string;
}


class UserService {
  async store(body: UserProperties) {
    const formattedUsername = body.username.toLowerCase()
    const { id: accountId, balance } = await AccountService.store()
    const user = await Users.create({
      id: uuidv4(),
      username: formattedUsername,
      password: body.password,
      accountId
    })


    return user
  }
  async find(username: string) {
    const formattedUsername = username.toLowerCase();

    return Users.findOne({ where: { username: formattedUsername }, attributes: ['username', 'accountId'] })
      .then((user: any) => user)
      .catch((error: any) => undefined)
  }

  async findAll() {
    return await Users.findAll({ attributes: ["username", "accountId"] })
  }
}


export default new UserService();