export interface IProduct {
  name: string;
  slug: string;
  photo: string;
  description: string;
  price: number;
  discount: number;
  stockStatus: boolean;
  status: "active" | "inactive";
  catagories: string;
}
