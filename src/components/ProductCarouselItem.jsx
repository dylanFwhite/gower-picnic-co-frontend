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
        className="text-lg font-normal"
      >
        {product.name}
      </h2>
      <p
        style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
        className="font-thin mt-3 text-center max-w-96"
      >
        {product.description}
      </p>
      <button className="rounded h-8 w-24 bg-sandal-yellow hover:bg-amber-200 mt-auto">
        <Link to={`product?id=${product._id}`}>
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

export default ProductCarouselItem;
