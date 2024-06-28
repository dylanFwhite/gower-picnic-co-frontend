import { createContext, useState } from "react";

const BasketContext = createContext();

function Provider({ children }) {
  const [basketItems, setBasketItems] = useState([]);

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
  };

  return (
    <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
  );
}

export { Provider };
export default BasketContext;
