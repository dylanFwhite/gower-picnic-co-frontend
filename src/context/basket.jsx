import { createContext, useState } from "react";

const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([
    {
      _id: "6676a708643b4a5ea6f4bae0",
      name: "Luxury Hamper",
    },
    {
      _id: "6676a708643b4a5ea6f4bae2",
      name: "Honey Jar",
    },
  ]);
  const [orderDate, setOrderDate] = useState(new Date("2024-06-30"));
  const [orderComment, setOrderComment] = useState("");

  const addBasketItem = (product) => {
    setBasketItems([...basketItems, product]);
  };
  const removeBasketItem = (productId) => {
    setBasketItems(basketItems.filter((item) => item._id !== productId));
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
