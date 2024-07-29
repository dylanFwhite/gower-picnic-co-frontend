import { useState, useEffect } from "react";
import { getProducts } from "../api/getProducts";

import ProductCarousel from "../components/ProductCarousel";

function ProductPage() {
  // Product Loader
  const [productsAll, setProductsAll] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductsAll(res));

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const picnics = productsAll.filter((prod) => prod.type === "picnic");

  // Product carousel
  const [showBoth, setShowBoth] = useState(true);
  const products = productsAll.filter((prod) => prod.type === "product");
  const nProducts = products.length;

  const [productIndex, setProductIndex] = useState([0, 1]);
  if (nProducts === 1) {
    setProductIndex([0, 0]);
    setShowBoth(false);
  }

  const handleProductClickRight = () => {
    if (productIndex[1] === nProducts - 1) {
      return setProductIndex([productIndex[0] + 1, 0]);
    }
    if (productIndex[0] === nProducts - 1) {
      return setProductIndex([0, productIndex[1] + 1]);
    }
    console.log([productIndex[0] + 1, productIndex[1] + 1]);
    setProductIndex([productIndex[0] + 1, productIndex[1] + 1]);
  };
  const handleProductClickLeft = () => {
    if (productIndex[0] === 0)
      return setProductIndex([nProducts - 1, productIndex[1] - 1]);
    if (productIndex[1] === 0)
      return setProductIndex([productIndex[0] - 1, nProducts - 1]);
    setProductIndex([productIndex[0] - 1, productIndex[1] - 1]);
  };

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setShowBoth(false);
    } else {
      setShowBoth(true);
    }
  };

  return (
    <>
      {/* Header image */}
      <div>
        <img
          className="w-full max-h-700"
          src="src/assets/img/picnic-image-header.jpg"
          alt="Image of Picnic"
        />
        <div className="absolute top-16 left-3 md:top-36 lg:top-36 xl:top-52">
          <h1
            style={{ fontFamily: "Roboto" }}
            className=" text-white Roboto text-xl md:text-2xl lg:text-3xl font-light"
          >
            The Gower Picnic Company
          </h1>
          <h2
            style={{ fontFamily: "Roboto" }}
            className=" text-white Roboto text-sm md:text-4xl lg:text-6xl font-normal uppercase tracking-wider"
          >
            products
          </h2>
        </div>
      </div>
      <div className="h-96 bg-slate-300">Picnic Stuff Here</div>
      <div className="bg-white w-full h-full flex flex-col">
        <div className="mx-auto flex flex-col items-center mt-8">
          <p
            style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
            className="font-light mt-3 text-center md:px-20 lg:px-32"
          >
            Some of our Favourites
          </p>
          <h1
            style={{
              fontFamily: "Roboto",
              color: "#686262",
            }}
            className="text-2xl font-normal mb-2 tracking-wider"
          >
            FEATURED PRODUCTS
          </h1>
          <hr className="border-sandal-yellow w-24" />
        </div>
        <ProductCarousel
          products={products}
          productIndex={productIndex}
          showBoth={showBoth}
          handleClickLeft={handleProductClickLeft}
          handleClickRight={handleProductClickRight}
        />
      </div>
    </>
  );
}

export default ProductPage;
