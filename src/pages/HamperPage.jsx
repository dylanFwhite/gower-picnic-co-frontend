import { useEffect, useState } from "react";
import { getProduct } from "../api/getProducts";
import useBasket from "../customHooks/useBasket";

function HamperPage() {
  const basket = useBasket();

  const [product, setProduct] = useState(null);
  const id = new URLSearchParams(window.location.search).get("id");

  const handleClick = () => {
    basket.addBasketItem(product);
  };

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res));
  }, [id]);

  return (
    <>
      <div className="h-20 bg-slate-400"></div>
      <div className="flex flex-col">
        {product ? product.name : "loading"}
        <button
          onClick={handleClick}
          className="rounded h-8 w-32 bg-sandal-yellow hover:bg-amber-200"
        >
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-white font-light text-md"
          >
            Add to Basket
          </span>
        </button>
      </div>
    </>
  );
}

export default HamperPage;
