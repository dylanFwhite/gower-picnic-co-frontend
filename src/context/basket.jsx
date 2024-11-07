import { createContext, useEffect, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState(() => {
    const basketItems = localStorage.getItem("basketItems");
    return basketItems ? JSON.parse(basketItems) : [];
  });
  const [orderDate, setOrderDate] = useState(null);
  const [orderComment, setOrderComment] = useState("");

  // Sync basketItem state with local storage
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const addBasketItem = (product) => {
    setBasketItems([...basketItems, product]);
  };

  const addBasketItems = (products) => {
    setBasketItems([...basketItems, ...products]);
  };

  const removeBasketItem = (ind) => {
    setBasketItems(basketItems.filter((item, index) => index !== ind));
  };

  const basket = {
    basketItems,
    addBasketItem,
    addBasketItems,
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
