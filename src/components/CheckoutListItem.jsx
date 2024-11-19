import { RiCloseLargeFill } from "react-icons/ri";

function CheckoutListItem({ product, handleClick }) {
  return (
    <div className="p-2 flex flex-row min-w-60">
      <img
        src="/src/assets/img/placeholder-picnic-image.png"
        alt="picnic-image"
        className="rounded-lg max-h-20"
      />
      <div className="flex flex-col px-3 my-auto">
        <h3
          style={{
            fontFamily: "Roboto",
          }}
          className="text-lg font-thin text-sandal-yellow"
        >
          {product.name}
        </h3>
        <p
          style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
          className="font-light"
        >
          {new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
          }).format(product.price)}
        </p>
      </div>
      <div className="ml-auto my-auto mx-3 text-slate-300">
        <button onClick={handleClick}>
          <RiCloseLargeFill />
        </button>
      </div>
    </div>
  );
}

export default CheckoutListItem;
