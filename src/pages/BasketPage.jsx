import { Outlet } from "react-router-dom";
import useBasket from "../customHooks/useBasket";
import CheckoutList from "../components/CheckoutList";
import CheckoutTotal from "../components/CheckoutTotal";

export default function BasketPage() {
  const basket = useBasket();
  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="h-12 md:h-20 bg-slate-400"></div>
      <div className="flex flex-row">
        <div className="w-2/3">
          <Outlet />
        </div>
        <div
          className="flex flex-col w-1/3 min-h-96 p-8 m-8"
          style={{ background: "#F9F9F9" }}
        >
          <h1
            style={{
              fontFamily: "Roboto",
            }}
            className="text-2xl font-normal mb-2 tracking-wider"
          >
            YOUR BASKET
          </h1>
          <CheckoutTotal basketItems={basket.basketItems} />
          <hr className="mx-6" />
          <CheckoutList
            basket={basket}
            removeBasketItem={basket.removeBasketItem}
          />
        </div>
      </div>
    </div>
  );
}
