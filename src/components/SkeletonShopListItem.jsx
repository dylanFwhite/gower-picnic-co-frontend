const SkeletonShopListItem = () => {
  return (
    <div className="animate-pulse flex flex-col mx-8 my-4 text-wrap w-60">
      <div className="bg-zinc-200 mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded"></div>
      <div className="my-4 mx-8 h-8 max-w-48 bg-zinc-200 rounded"></div>
      <div className="flex flex-row justify-between mx-4 mt-auto bottom-0">
        <input
          type="number"
          className="border-solid border-2 border-slate-500 w-12 pl-2"
        />
        <button className=" h-8 w-36 bg-sandal-yellow hover:bg-amber-200">
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

export default SkeletonShopListItem;
