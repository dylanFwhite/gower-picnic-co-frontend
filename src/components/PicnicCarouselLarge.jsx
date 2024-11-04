import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Calendar } from "rsuite";

function PicnicCarousel({
  picnics,
  picnicIndex,
  handleClickLeft,
  handleClickRight,
}) {
  // TODO: USE URL PARAMETER TO ENSURE THE INITIAL PRODUCT IS THE ONE THAT
  // HAS BEEN REDIRECTED

  const [showCalendar, setShowCalendar] = useState(false);

  const pearlChain = picnics.map((el, ind) => {
    let col = "text-xs text-gray-300";
    if (ind === picnicIndex) col = "text-xs text-gray-600";
    return <FaCircle key={ind} className={col} />;
  });

  const getAvailability = (date) => {
    const weekday = date.getDay();
    switch (weekday) {
      case 1:
        return null;
      case 2:
        return null;
    }
    const day = date.getDate();
    switch (day) {
      case 14:
        return "3";
      case 15:
        return "2";
      case 10:
        return "1";
      case 5:
        return "4";
      default:
        return "4+";
    }
  };

  const renderCell = (date) => {
    const count = getAvailability(date);
    if (!count) return;
    return (
      <div className="flex items-center justify-center rounded-full h-5 w-5 bg-sandal-yellow text-white text-xs">
        {count || ""}
      </div>
    );
  };

  const cellStyle = (date) => {
    const weekday = date.getDay();
    switch (weekday) {
      case 1:
        return "bg-gray";
      case 2:
        return "bg-gray";
      default:
        return undefined;
    }
  };

  return (
    <div className="container mx-auto h-full flex flex-row justify-center content-center">
      <div className="content-center">
        <button onClick={handleClickLeft}>
          <BsChevronLeft className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
      <div className="flex flex-col ml-4">
        <div className="w-full flex flex-col lg:flex-row lg:place-content-center">
          <div className="flex flex-col min-w-4 justify-center text-center lg:text-left lg:items-start space-y-5 lg:space-y-10">
            <h1
              style={{
                fontFamily: "Roboto",
              }}
              className="text-2xl font-thin text-sandal-yellow mt-8"
            >
              {picnics[picnicIndex] && picnics[picnicIndex].name}
            </h1>
            <p
              style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
              className="font-light whitespace-pre-wrap"
            >
              {picnics[picnicIndex] && picnics[picnicIndex].description}
            </p>
            <div className="flex w-full relative">
              <button className=" h-8 w-32 bg-sandal-yellow hover:bg-amber-200">
                <Link to="/shop">
                  <span
                    style={{ fontFamily: "Roboto" }}
                    className="text-white font-light text-md"
                  >
                    Shop Now
                  </span>
                </Link>
              </button>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="h-8 w-32 border ml-8 border-sandal-yellow bg-none hover:bg-amber-200 mt-auto"
              >
                <span
                  style={{ fontFamily: "Roboto", color: "#6F6D6D" }}
                  className="text-white font-light text-md"
                >
                  Check Availability
                </span>
              </button>
              {showCalendar && (
                <div className="bg-white absolute top-8 shadow-lg w-96">
                  <Calendar
                    compact
                    bordered
                    renderCell={renderCell}
                    cellClassName={(date) => cellStyle(date)}
                  />
                </div>
              )}
            </div>
          </div>
          <img
            src="/src/assets/img/placeholder-picnic-image.png"
            alt="picnic-image"
            className="mx-4 my-auto max-w-60 max-h-60 md:max-w-80 md:max-h-80 lg:max-w-400 lg:max-h-400 rounded-lg"
          />
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
