import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const router = Router();

const controller = new UsersController();

router.post('/', controller.create);

export default router;