import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function PicnicCarousel({
  picnics,
  picnicIndex,
  handleClickLeft,
  handleClickRight,
}) {
  const pearlChain = picnics.map((el, ind) => {
    let col = "text-xs text-gray-300";
    if (ind === picnicIndex) col = "text-xs text-gray-600";
    return <FaCircle key={ind} className={col} />;
  });
  return (
    <div className="container mx-auto h-full flex flex-row justify-center content-center">
      <div className="content-center">
        <button onClick={handleClickLeft}>
          <BsChevronLeft className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex flex-col lg:flex-row lg:place-content-center">
          <img
            src="/src/assets/img/placeholder-picnic-image.png"
            alt="picnic-image"
            className="mx-auto my-8 lg:m-16 max-w-60 md:max-w-80 lg:max-w-full rounded-lg"
          />
          <div className="flex flex-col min-w-4 justify-center items-center text-center lg:text-left lg:items-start space-y-5 lg:space-y-20">
            <h1
              style={{
                fontFamily: "Roboto",
              }}
              className="text-2xl font-thin text-sandal-yellow"
            >
              {picnics[picnicIndex] && picnics[picnicIndex].name}
            </h1>
            <p
              style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
              className="font-light"
            >
              {picnics[picnicIndex] && picnics[picnicIndex].summary}
              <br />
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className=" h-8 w-32 bg-sandal-yellow hover:bg-amber-200">
              <Link
                className="h-8 w-32"
                to={`picnics?id=${
                  picnics[picnicIndex] && picnics[picnicIndex]._id
                }`}
              >
                <p
                  style={{ fontFamily: "Roboto" }}
                  className="text-white font-light text-md"
                >
                  Find Out More
                </p>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center m-4 space-x-2">{pearlChain}</div>
      </div>
      <div className="content-center">
        <button onClick={handleClickRight}>
          <BsChevronRight className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
    </div>
  );
}

export default PicnicCarousel;
