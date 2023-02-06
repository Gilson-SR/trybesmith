import { IToken, IUser } from '../interfaces';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';

export default class UserService {
  constructor(private usersModel = new UsersModel(connection)) { }

  public create = async (user: IUser) => {
    const created: IToken = await this.usersModel.create(user);
    return created;
  };
}