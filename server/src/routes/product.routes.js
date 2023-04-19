import "../config";

import { Router } from "express";
import * as ProductController from '../controllers/product/product.controller';
import * as CategoryController from "../controllers/product/catalogs/category.controller";
import { usersOnly } from "../middleware/usersOnly";
import { adminOnly } from "../middleware/adminOnly";

const router = Router();

router.get(
    `${process.env.API_BASE}/products`,
    usersOnly,
    ProductController.getProducts
);

//Categories
router.get(
    `${process.env.API_BASE}/categories`,
    usersOnly,
    CategoryController.getCategories
);

router.post(
    `${process.env.API_BASE}/categories`,
    adminOnly,
    CategoryController.createCategory
);

export default router;
