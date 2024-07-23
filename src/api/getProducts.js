import axios from "axios";

export async function getProducts() {
  const res = await axios.get("/api/v1/products");
  return await res.data.data;
}

export async function getProduct(id) {
  const res = await axios.get(`/api/v1/products/${id}`);
  return await res.data.data;
}
