import { useContext } from "react";
import BasketContext from "../context/basket";

export default function () {
  const basket = useContext(BasketContext);
  console.log(basket);
  return basket;
}
