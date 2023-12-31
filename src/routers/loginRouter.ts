import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import LoginMiddleware from '../middlewares/LoginMiddleware';

const router = Router();

const usersController = new UsersController();

router.use(LoginMiddleware.bodyValidation);

router.post('/', usersController.login);

export default router;