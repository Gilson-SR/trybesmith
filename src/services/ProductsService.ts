import ProductsModel from '../models/ProductsModel';
import { IProduct } from '../interfaces';
import connection from '../models/connection'; 

export default class ProductsService {
  constructor(private productsModels = new ProductsModel(connection)) { }

  async create(name: string, amount: string): Promise<IProduct> {
    const product = await this.productsModels.create(name, amount);
    return product;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.productsModels.getAll();
    return products;
  }
}