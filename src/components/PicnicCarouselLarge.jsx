import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Calendar } from "rsuite";

import { getAvailability } from "../api/getProducts";

function PicnicCarousel({
  picnics,
  picnicIndex,
  handleClickLeft,
  handleClickRight,
}) {
  // TODO: USE URL PARAMETER TO ENSURE THE INITIAL PRODUCT IS THE ONE THAT
  // HAS BEEN REDIRECTED

  const [showCalendar, setShowCalendar] = useState(false);
  const [loadCalendar, setLoadCalendar] = useState(false);
  const [availableCount, setAvailableCount] = useState([]);

  const pearlChain = picnics.map((el, ind) => {
    let col = "text-xs text-gray-300";
    if (ind === picnicIndex) col = "text-xs text-gray-600";
    return <FaCircle key={ind} className={col} />;
  });

  const handleAvailable = async (type) => {
    if (showCalendar) {
      setShowCalendar(false);
      setLoadCalendar(false);
      return;
    }
    setLoadCalendar(true);
    const count = await getAvailability(type);
    setAvailableCount(count);
    setShowCalendar(true);
    setTimeout(1000);
    setLoadCalendar(false);
  };

  const getCount = (date, availableCount) => {
    if (date.getTime() <= new Date().getTime()) return null;
    const weekday = date.getDay();
    switch (weekday) {
      case 1:
        return null;
      case 2:
        return null;
    }

    const existingDates = availableCount.map((item) => Date.parse(item.date));
    const index = existingDates.findIndex((exist) => exist === date.getTime());

    if (index < 0) return "4+";

    return availableCount[index].count.toString();
  };

  const renderCell = (date) => {
    const count = getCount(date, availableCount);
    if (!count) return;
    return (
      <div className="flex items-center justify-center rounded-full h-5 w-5 bg-sandal-yellow text-white text-xs">
        {count || ""}
      </div>
    );
  };

  const cellStyle = (date) => {
    if (date.getTime() <= new Date().getTime()) return "bg-gray";
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

  const loadingCalendar = (
    <span>
      <svg
        className="animate-spin h-6 w-6 mx-auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          strokeWidth="8"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
  );

  return (
    <>
      <div className="content-center">
        <button
          onClick={() => {
            setShowCalendar(false);
            handleClickLeft();
          }}
        >
          <BsChevronLeft className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
      <div className="container min-h-600 flex flex-row justify-evenly">
        <div className="flex flex-col ml-4">
          <div className="w-full flex flex-col h-5/6 lg:flex-row lg:place-content-center">
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
            </div>
            <img
              src="/src/assets/img/placeholder-picnic-image.png"
              alt="picnic-image"
              className="mx-auto lg:mx-4 my-8 lg:my-auto max-w-60 max-h-60 md:max-w-80 md:max-h-80 lg:max-h-96 lg:max-w-96 xl:max-h-700 xl:max-w-700 2xl:max-h-700 2xl:max-w-700 rounded-lg"
            />
          </div>
          <div className="flex flex-col h-1/6">
            <div className="flex w-full relative justify-center mt-auto">
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
                onClick={() => handleAvailable(picnics[picnicIndex].type)}
                className="h-8 w-32 border ml-8 border-sandal-yellow bg-none hover:bg-amber-200 mt-auto"
              >
                <span
                  style={{ fontFamily: "Roboto", color: "#6F6D6D" }}
                  className="text-white font-light text-md"
                >
                  {loadCalendar ? loadingCalendar : `Check Availability`}
                </span>
              </button>
              {showCalendar && (
                <div className="bg-white absolute top-8 shadow-lg w-80 md:w-96">
                  <Calendar
                    compact
                    bordered
                    renderCell={renderCell}
                    cellClassName={(date) => cellStyle(date)}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center m-4 space-x-2">
              {pearlChain}
            </div>
          </div>
        </div>
      </div>
      <div className="content-center">
        <button
          onClick={() => {
            setShowCalendar(false);
            handleClickRight();
          }}
        >
          <BsChevronRight className="h-8 w-8 text-sandal-yellow hover:text-amber-200" />
        </button>
      </div>
    </>
  );
}

export default PicnicCarousel;
