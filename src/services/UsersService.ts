import { IToken, IUser, User } from '../interfaces';
import { createToken } from '../utils/jwt';
import UsersModel from '../models/UsersModel';
import connection from '../models/connection';

export default class UserService {
  constructor(private usersModel = new UsersModel(connection)) { }

  public create = async (user: IUser) => {
    const created: IToken = await this.usersModel.create(user);
    return created;
  };

  public findByUsername = async (username: string) => {
    const user: User | null = await this.usersModel.findByUsername(username);
    return user;
  };

  public login = async (username: string, password: string) => {
    const user = await this.findByUsername(username);
    if (!user) return { type: 401, message: 'Username or password invalid' };
    if (user.password !== password) return { type: 401, message: 'Username or password invalid' };
    const token = createToken({ id: user.id, username: user.username });

    return { type: null, token };
  };
}