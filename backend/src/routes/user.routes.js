import '../config';

import { Router } from 'express';
import * as Controller from '../controllers/user/user.controller';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.get(`${process.env.API_BASE}/users`, verifyToken, Controller.getUsers);

router.post(`${process.env.API_BASE}/users`, Controller.registerUser);

export default router;