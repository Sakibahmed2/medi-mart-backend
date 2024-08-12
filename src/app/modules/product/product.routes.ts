import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router();

router.post("/create-product", ProductControllers.createProducts);

export const productRoutes = router;
