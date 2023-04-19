import '../config';

import { Router } from 'express';
import * as Controller from '../controllers/auth/auth.controller';

const router = Router();

router.post(`${process.env.API_BASE}/auth/login`, Controller.login);

export default router;