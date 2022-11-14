import Account from "../database/models/account";
import User from "../database/models/user";
import AccountService from "./AccountService";

type UserProperties = {
  username: string;
  password: string;
}

type AccountProperty = {
  id: number;
  balance: number;
}

class UserService {
  async store(body: UserProperties) {

    const account: any = await AccountService.store()
    const user = await User.create({
      username: body.username,
      password: body.password,
      accountId: account.id
    })


    return user
  }
  async find() {

  }

  async show() {

  }
}


export default new UserService();