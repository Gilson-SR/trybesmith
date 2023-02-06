import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import UsersService from '../services/UsersService';

export default class UserController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const created = await this.usersService.create(user);

    return res.status(201).json(created);
  };

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const loginUser = await this.usersService.login(username, password);

    if (loginUser.type) return res.status(loginUser.type).json({ message: loginUser.message });

    return res.status(200).json({ token: loginUser.token });
  };
}