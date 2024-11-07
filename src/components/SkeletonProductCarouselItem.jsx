import { Link } from "react-router-dom";

function SkeletonProductCarouselItem() {
  return (
    <div className="animate-pulse flex flex-col items-center h-600">
      <div className="bg-zinc-200 my-4 lg:m-8 w-48 h-48 lg:w-72 lg:h-72 rounded-lg"></div>
      <div className="h-8 w-36 bg-zinc-200 rounded"></div>
      <div className="w-72 mt-4 grid grid-cols-3 gap-4 p-4">
        <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
        <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
        <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
        <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
        <div className="h-4 bg-zinc-200 rounded col-span-3"></div>
        <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
        <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
      </div>
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

export default SkeletonProductCarouselItem;
