import { createContext, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);
  const [orderDate, setOrderDate] = useState(new Date("2024-06-30"));
  const [orderComment, setOrderComment] = useState("");

  const addBasketItem = (product) => {
    setBasketItems([...basketItems, product]);
  };
  const removeBasketItem = (ind) => {
    setBasketItems(basketItems.filter((item, index) => index !== ind));
  };

  const basket = {
    basketItems,
    addBasketItem,
    removeBasketItem,
    orderDate,
    setOrderDate,
    orderComment,
    setOrderComment,
  };

  return (
    <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
  );
}

export { BasketProvider };
export default BasketContext;
