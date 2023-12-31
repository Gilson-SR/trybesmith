import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const router = Router();

const userController = new UsersController();

router.post('/', userController.create);

export default router;