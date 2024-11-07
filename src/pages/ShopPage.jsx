import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";
import useBasket from "../customHooks/useBasket";
import ShopListItem from "../components/ShopListItem";
import SkeletonShopListItem from "../components/SkeletonShopListItem";

function ShopPage() {
  const basket = useBasket();

  // Product Loader
  const [productsAll, setProductsAll] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductsAll(res));
  }, []);
  const picnics = productsAll.filter((prod) => prod.type === "picnic");
  const picnicList = picnics.map((picnic) => {
    return <ShopListItem basket={basket} product={picnic} key={picnic._id} />;
  });
  const products = productsAll.filter((prod) => prod.type === "product");
  const productList = products.map((product) => {
    return <ShopListItem basket={basket} product={product} key={product._id} />;
  });

  const emptyItemList = [
    <SkeletonShopListItem key={1} />,
    <SkeletonShopListItem key={2} />,
    <SkeletonShopListItem key={3} />,
  ];

  return (
    <>
      {/* Header image */}
      <div>
        <img
          className="w-full max-h-525 min-h-525"
          src="src/assets/img/shop-image-header.jpg"
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
            shop
          </h2>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center my-8">
        <h1
          style={{
            fontFamily: "Roboto",
            color: "#686262",
          }}
          className="text-2xl font-normal mb-2 tracking-wider uppercase"
        >
          Picnic Hampers
        </h1>
        <hr className="w-24 border-sandal-yellow" />
      </div>
      {/* Hamper List */}
      <div className="flex flex-wrap justify-center">
        {picnicList.length === 0 ? emptyItemList : picnicList}
      </div>
      <div className="mx-auto flex flex-col items-center my-8">
        <h1
          style={{
            fontFamily: "Roboto",
            color: "#686262",
          }}
          className="text-2xl font-normal mb-2 tracking-wider uppercase"
        >
          Products
        </h1>
        <hr className="w-24 border-sandal-yellow" />
      </div>
      {/* Product List */}
      <div className="flex flex-wrap justify-center mb-16">
        {productList.length === 0 ? emptyItemList : productList}
      </div>
    </>
  );
}

export default ShopPage;
