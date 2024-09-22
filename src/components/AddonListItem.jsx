import { useState } from "react";

const AddonListItem = ({ basket, item }) => {
  const handleAddBasket = (prod, qty) => {
    let products = [];
    for (let i = 0; i < qty; i++) {
      products.push(prod);
    }
    basket.addBasketItems(products);
  };
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className="flex flex-row">
      <span>
        {item.label}:
        {new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "GBP",
        }).format(item.value.price)}
      </span>

      <input
        type="number"
        min={1}
        value={quantity}
        onChange={handleChange}
        className="border-solid border-2 border-slate-500 w-12 pl-2"
      />

      <button
        onClick={() => handleAddBasket(item.value, quantity)}
        className=" h-8 w-36 bg-sandal-yellow hover:bg-amber-200"
      >
        <span
          style={{ fontFamily: "Roboto" }}
          className="text-white font-normal text-xs uppercase"
        >
          Add
        </span>
      </button>
    </div>
  );
};

export default AddonListItem;
