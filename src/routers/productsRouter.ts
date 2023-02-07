import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import ProductMiddleware from '../middlewares/ProductsMiddleware';

const router = Router();

const productController = new ProductsController();

router.get('/', (req, res) => productController.getAll(req, res));

router.use(ProductMiddleware.bodyValidation);

router.post('/', (req, res) => productController.create(req, res));

export default router;