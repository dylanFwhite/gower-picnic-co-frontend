import { getProducts } from "../../api/getProducts";

export async function homeLoader() {
  const products = await getProducts();

  return products;
}
