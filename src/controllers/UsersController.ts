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
}