import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import ProductMiddleware from '../middlewares/ProductsMiddleware';

const router = Router();

const productController = new ProductsController();

router.post('/', (req, res) => productController.create(req, res));
router.get('/', (req, res) => productController.getAll(req, res));

router.use(ProductMiddleware.bodyValidation);

export default router;