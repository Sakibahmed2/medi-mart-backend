import { IProduct } from "./product.interface";
import { Products } from "./product.model";

// *** create product *** //
const createProductIntoDB = async (productData: IProduct) => {
  const result = await Products.create(productData);
  return result;
};

// *** get all product *** //
const getAllProductFromDB = async () => {
  const result = await Products.find();

  return result;
};

// *** get single product *** //
const getSingleProductFromDB = async (id: string) => {
  const result = await Products.findById(id);

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
};
