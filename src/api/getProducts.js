import axios from "axios";

export async function getProducts() {
  const res = await axios.get("/api/v1/products");
  return await res.data.data;
}

export async function getProduct(id) {
  const res = await axios.get(`/api/v1/products/${id}`);
  return await res.data.data;
}

export async function getAddOns() {
  const res = await axios.get(`/api/v1/products/add-on`);
  return await res.data.data;
}

export async function getAvailability(type) {
  const res = await axios.get(`/api/v1/products/availability/${type}`);
  return await res.data.data;
}
