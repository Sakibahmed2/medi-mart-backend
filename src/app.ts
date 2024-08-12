import express, { Request, Response, Router } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/product/product.routes";

const app = express();

// parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/products", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my project 🙂");
});

export default app;
