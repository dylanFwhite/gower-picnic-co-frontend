import { useLoaderData } from "react-router-dom";
import useBasket from "../../customHooks/useBasket";

function HomePage() {
  const basket = useBasket();

  const products = useLoaderData();

  return (
    <div>
      <h2>HomePage</h2>
      <p>Products: {products.length}</p>
      <p>Basket Items: {basket.length}</p>
    </div>
  );
}

export default HomePage;
