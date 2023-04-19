import "../config";

import { Router } from "express";
import * as Controller from "../controllers/product/product.controller";
import { usersOnly } from "../middleware/usersOnly";

const router = Router();

router.get(
    `${process.env.API_BASE}/products`,
    usersOnly,
    Controller.getProducts
);

export default router;
