import { Link } from "react-router-dom";
import BasketItemSmall from "./BasketItemSmall";

function BasketListSmall({ basket, removeBasketItem, handleClickCheckout }) {
  if (basket.basketItems.length === 0) {
    return (
      <div className="p-4">
        <p
          style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
          className="py-2 font-normal text-center"
        >
          No Items in the basket
        </p>
        <button className="rounded h-8 w-32 bg-sandal-yellow hover:bg-amber-200">
          <Link to="/shop">
            <span
              style={{ fontFamily: "Roboto" }}
              className="text-white font-light text-md"
            >
              Shop Now
            </span>
          </Link>
        </button>
      </div>
    );
  }

  const basketList = basket.basketItems.map((product, index) => {
    return (
      <div key={index}>
        <BasketItemSmall
          product={product}
          handleClick={() => removeBasketItem(index)}
        />
        <hr className="mx-6" />
      </div>
    );
  });

  return (
    <div className="flex flex-col">
      {basketList}
      <button
        className="rounded h-8 w-32 bg-sandal-yellow hover:bg-amber-200 mx-auto my-4"
        onClick={handleClickCheckout}
      >
        <Link to="/checkout" className="w-32 h-8">
          <p
            style={{ fontFamily: "Roboto" }}
            className="text-white font-light text-md"
          >
            Checkout
          </p>
        </Link>
      </button>
    </div>
  );
}

export default BasketListSmall;
