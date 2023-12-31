import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces';

export default class ProductMiddleware {
  public static fieldValidation = (name: string, amount: string) => {
    if (typeof name !== 'string') {
      return { status: 422, message: '"name" must be a string' };
    }

    if (name.length <= 2) {
      return {
        status: 422,
        message: '"name" length must be at least 3 characters long',
      };
    }

    if (typeof amount !== 'string') {
      return { status: 422, message: '"amount" must be a string' };
    }

    if (amount.length <= 2) {
      return {
        status: 422,
        message: '"amount" length must be at least 3 characters long',
      };
    }
  };

  public static bodyValidation = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { name, amount } = req.body as IProduct;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    if (!amount) {
      return res.status(400).json({ message: '"amount" is required' });
    }

    const validatedFields = this.fieldValidation(name, amount);

    if (validatedFields) {
      return res
        .status(validatedFields.status)
        .json({ message: validatedFields.message });
    }

    next();
  };
}
