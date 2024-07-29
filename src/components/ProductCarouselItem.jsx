import { Link } from "react-router-dom";

function ProductCarouselItem({ product }) {
  return (
    <div className="flex flex-col items-center h-700">
      <img
        src="/src/assets/img/placeholder-picnic-image.png"
        alt="picnic-image"
        className="my-4 lg:m-8 max-w-48 md:max-w-48 lg:max-w-96 rounded-lg"
      />
      <h2
        style={{
          fontFamily: "Roboto",
          color: "#5C5C5C",
        }}
        className="text-lg font-normal uppercase  tracking-wide"
      >
        {product && product.name}
      </h2>
      <p
        style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
        className="font-thin mt-3 text-center max-w-96"
      >
        {product && product.description}
      </p>
      <button className="h-10 w-24 border border-sandal-yellow bg-none hover:bg-amber-200 mt-auto">
        <Link to="/shop">
          <span
            style={{ fontFamily: "Roboto", color: "#6F6D6D" }}
            className="text-white font-light text-md"
          >
            Shop Now
          </span>
        </Link>
      </button>
    </div>
  );
}

export default ProductCarouselItem;
