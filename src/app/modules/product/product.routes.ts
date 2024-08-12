import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router();

router.post("/create-product", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);

export const productRoutes = router;
