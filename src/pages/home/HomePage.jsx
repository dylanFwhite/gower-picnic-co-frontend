import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import PicnicCarousel from "../../components/PicnicCarousel";
import ProductCarousel from "../../components/ProductCarousel";

function HomePage() {
  const productsAll = useLoaderData();

  // Picnic carousel
  const picnics = productsAll.filter((product) => product.type === "picnic");
  const nPicnics = picnics.length;

  const [picnicIndex, setPicnicIndex] = useState(0);

  const handlePicnicClickRight = () => {
    if (picnicIndex === nPicnics - 1) return setPicnicIndex(0);
    setPicnicIndex(picnicIndex + 1);
  };
  const handlePicnicClickLeft = () => {
    if (picnicIndex === 0) return setPicnicIndex(nPicnics - 1);
    setPicnicIndex(picnicIndex - 1);
  };

  // Product carousel
  const [showBoth, setShowBoth] = useState(true);

  const products = productsAll.filter((product) => product.type === "product");
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

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header image */}
      <div>
        <img
          className="w-full max-h-700"
          src="src/assets/img/bay-image-header.jpg"
          alt="Image of Three Cliffs Bay"
        />
        <div className="absolute top-16 left-3 md:top-36 lg:top-36 xl:top-52">
          <h1
            style={{ fontFamily: "Roboto" }}
            className=" text-white Roboto text-xl md:text-4xl lg:text-6xl font-normal uppercase"
          >
            The Gower Picnic Company
          </h1>
          <h2
            style={{ fontFamily: "Roboto" }}
            className=" text-white Roboto text-sm md:text-xl lg:text-3xl font-light"
          >
            eat your best life
          </h2>
        </div>
      </div>
      {/* About Us */}
      <div className="bg-white m-16 flex flex-col justify-center items-center min-h-1">
        <h1
          style={{
            fontFamily: "Roboto",
          }}
          className="text-2xl font-thin text-sandal-yellow"
        >
          Our Philosophy
        </h1>
        <p
          style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
          className="font-light mt-3 text-center md:px-20 lg:px-32"
        >
          At The Gower Picnic Company, we are passionate about helping our
          customers enjoy the best of Swansea’s natural beauty with our
          carefully curated hampers, showcasing the incredible food the region
          has to offer. Sustainability and social responsibility are at the
          heart of every decision we make. We are committed to using local
          produce and partnering with environmentally conscious suppliers,
          ensuring that every choice we make supports our community and our
          planet.
        </p>
        <p
          style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
          className="font-light mt-3 text-center md:px-20 lg:px-32"
        >
          We are dedicated to providing high-quality picnic hampers filled with
          homemade goodies and fresh local produce. Our Classic Hamper is
          presented in a reusable, branded jute bag and palm leaf plates, while
          our Gourmet Hamper comes in a luxury picnic basket, complete with
          picnic blanket and gorgeous tableware, ideal for the ultimate outdoor
          dining experience. Our online shop features select picnic-life
          products to buy and delicious add-ons to your Hamper.
        </p>
      </div>
      {/* Picnic Slider */}
      <div style={{ background: "#F9F9F9" }} className="w-full h-full">
        <PicnicCarousel
          picnics={picnics}
          picnicIndex={picnicIndex}
          handleClickLeft={handlePicnicClickLeft}
          handleClickRight={handlePicnicClickRight}
        />
      </div>
      {/* Product Slider */}
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
      <div className="bg-sandal-yellow w-full h-24 flex flex-col">
        <h1 className="mx-auto my-4 text-white">CONTACT US</h1>
      </div>
    </>
  );
}

export default HomePage;
