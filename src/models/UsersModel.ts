import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, IToken } from '../interfaces';
import { createToken } from '../utils/jwt';

export default class UsersModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser): Promise<IToken> => {
    const { username, vocation, level, password } = user;

    const query = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
    const values = [username, vocation, level, password];

    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, values);

    const token = createToken({ id, username });

    const newUser: IToken = { token };
    return newUser;
  };
}