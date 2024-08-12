import { IProduct } from "./product.interface";
import { Products } from "./product.model";

const createProductIntoDB = async (productData: IProduct) => {
  const result = await Products.create(productData);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
