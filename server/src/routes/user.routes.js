import "../config";

import { Router } from "express";
import * as Controller from "../controllers/user/user.controller";
import { adminOnly } from "../middleware/adminOnly";

const router = Router();

router.get(`${process.env.API_BASE}/users`, adminOnly, Controller.getUsers);

export default router;
