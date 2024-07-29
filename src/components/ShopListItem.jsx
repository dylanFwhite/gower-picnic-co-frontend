import { useState } from "react";

const ShopListItem = ({ basket, product }) => {
  // Quantity Picker
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddBasket = (prod, qty) => {
    let products = [];
    for (let i = 0; i < qty; i++) {
      products.push(prod);
    }
    basket.addBasketItems(products);
  };

  return (
    <div className="flex flex-col mx-8 my-4 text-wrap w-60">
      <img
        src="/src/assets/img/placeholder-picnic-image.png"
        alt="picnic-image"
        className="mx-auto max-w-32 md:max-w-40 lg:max-w-60 rounded"
      />
      <h3
        style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
        className="text-center uppercase tracking-wider my-4"
      >
        {product && product.name}
      </h3>
      <div className="flex flex-row justify-between mx-4 mt-auto bottom-0">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleChange}
          className="border-solid border-2 border-slate-500 w-12 pl-2"
        />
        <button
          onClick={() => handleAddBasket(product, quantity)}
          className=" h-8 w-36 bg-sandal-yellow hover:bg-amber-200"
        >
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-white font-normal text-xs uppercase"
          >
            Add to Basket
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShopListItem;
