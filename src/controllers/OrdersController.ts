import { Request, Response } from 'express';

import OrdersService from '../services/OrdersService';

export default class OrderController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    return res.status(200).json(orders);
  };
}