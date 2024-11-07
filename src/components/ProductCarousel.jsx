import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import ProductCarouselItem from "./ProductCarouselItem";
import SkeletonProductCarouselItem from "./SkeletonProductCarouselItem";

function ProductCarousel({
  products,
  productIndex,
  showBoth,
  handleClickLeft,
  handleClickRight,
}) {
  return (
    <div className="flex flex-row justify-evenly mb-16">
      <div className="content-center">
        <button onClick={handleClickLeft}>
          <BsChevronLeft className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
      {products.length === 0 ? (
        <>
          <SkeletonProductCarouselItem />
          {showBoth && <SkeletonProductCarouselItem />}
        </>
      ) : (
        <>
          <ProductCarouselItem product={products[productIndex[0]]} />
          {showBoth && (
            <ProductCarouselItem product={products[productIndex[1]]} />
          )}
        </>
      )}
      <div className="content-center">
        <button onClick={handleClickRight}>
          <BsChevronRight className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
    </div>
  );
}

export default ProductCarousel;
