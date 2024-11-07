import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useBasket from "../customHooks/useBasket";
import BasketBlob from "./BasketBlob";
import BasketListSmall from "./BasketListSmall";

export default function Header() {
  const [bgTrans, setBgTrans] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const refBox = useRef(null);
  const refIcon = useRef(null);

  const basket = useBasket();

  const bg = bgTrans ? "bg-transparent" : "bg-slate-400";

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgTrans(false);
    } else {
      setBgTrans(true);
    }
  };
  const handleClickOutside = (event) => {
    if (refIcon.current && refIcon.current.contains(event.target)) {
      return;
    } else if (refBox.current && !refBox.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`z-50 flex fixed ${bg} h-12 md:h-20 text-white top-0 left-0 right-0`}
    >
      <div className="mx-auto flex flex-row items-center">
        <Link to="/">
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-white uppercase font-thin text-sm px-4 md:text-2xl md:px-8"
          >
            home
          </span>
        </Link>
        <Link to="/picnics">
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-white uppercase font-thin text-sm px-4 md:text-2xl md:px-8"
          >
            picnics
          </span>
        </Link>
        <Link to="/shop">
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-white uppercase font-thin text-sm px-4 md:text-2xl md:px-8"
          >
            shop
          </span>
        </Link>
      </div>
      <div className="right-2 top-3 md:right-4 md:top-3 fixed">
        <button ref={refIcon} onClick={() => setShowDropdown(!showDropdown)}>
          <div className="relative">
            <img
              src="/src/assets/img/GowerPicnicCo-Logo-No-Text.svg"
              alt="basket-logo"
              className="h-6 md:h-14"
            />
            {basket.basketItems.length > 0 ? (
              <BasketBlob count={basket.basketItems.length} />
            ) : null}
          </div>
        </button>
        {showDropdown && (
          <div ref={refBox} className="absolute right-0">
            <div
              className="ml-6 md:m-auto shadow-xl absolute right-1 md:right-5"
              style={{
                width: "0",
                height: "0",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "15px solid #fff",
              }}
            ></div>
            <div className="bg-white text-black shadow-xl rounded-md mt-3 max-h-96 overflow-auto">
              <div className="ml-4 py-2">
                <h1
                  style={{
                    fontFamily: "Roboto",
                    color: "#686262",
                  }}
                  className="text-xl font-normal tracking-wider"
                >
                  BASKET
                </h1>
              </div>
              <BasketListSmall
                basket={basket}
                removeBasketItem={basket.removeBasketItem}
                handleClickCheckout={() => setShowDropdown(!showDropdown)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
