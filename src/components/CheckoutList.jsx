import { Link } from "react-router-dom";
import CheckoutListItem from "./CheckoutListItem";

function CheckoutList({ basket, removeBasketItem }) {
  if (basket.basketItems.length === 0) {
    return (
      <div className="flex flex-col p-4 mx-auto">
        <p
          style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
          className="py-2 font-normal"
        >
          No Items in the basket
        </p>
        <button className="rounded h-8 w-32 mt-4 mx-auto bg-sandal-yellow hover:bg-amber-200">
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

  const checkoutList = basket.basketItems.map((product, index) => {
    return (
      <div key={index}>
        <CheckoutListItem
          product={product}
          handleClick={() => removeBasketItem(index)}
        />
        <hr className="mx-6" />
      </div>
    );
  });

  return <div className="flex flex-col">{checkoutList}</div>;
}

export default CheckoutList;
