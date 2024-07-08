import axios from "axios";

export async function getProducts() {
  const res = await axios.get("/api/v1/products");
  return await res.data.data;
}
