import { IOrder } from '../interfaces';
import OrdersModel from '../models/OrdersModel';
import connection from '../models/connection';

export default class OrderService {
  constructor(private ordersModel = new OrdersModel(connection)) { }

  public getAll = async () => {
    const orders: IOrder[] = await this.ordersModel.getAll();
    return orders;
  };
}