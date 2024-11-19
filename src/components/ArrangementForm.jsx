import { useEffect, useState } from "react";
import { DateInput, Calendar, InputGroup } from "rsuite";
import Input from "rsuite/Input";
import CalendarIcon from "@rsuite/icons/Calendar";
import Dropdown from "rsuite/Dropdown";
import { TbAbc } from "react-icons/tb";
import { getAddOns } from "../api/getProducts";
import useBasket from "../customHooks/useBasket";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CheckoutLabel from "./CheckoutLabel";
import AddonList from "./AddonList";

function ArrangementForm() {
  const navigate = useNavigate();

  const basket = useBasket();
  const [showCalendar, setShowCalendar] = useState(false);

  const [unavailableDates, setUnavailableDates] = useState([]);
  const [date, setDate] = useState(null);
  const [dateError, setDateError] = useState(false);
  const [note, setNote] = useState("");
  const [addOns, setAddOns] = useState([]);

  useEffect(() => {
    const luxuryPicnicCount = basket.basketItems.filter(
      (item) => item.type === "luxury-picnic"
    ).length;
    const picnicCount = basket.basketItems.filter(
      (item) => item.type === "picnic"
    ).length;

    axios
      .post("/api/v1/products/availability", {
        luxuryPicnic: luxuryPicnicCount,
        picnic: picnicCount,
      })
      .then((res) => {
        const unavailableDates = res.data.data.map((date) => Date.parse(date));
        setUnavailableDates(unavailableDates);
      });
  }, [basket.basketItems]);

  const getAdditions = () => {
    getAddOns().then((addOns) => {
      const addOnsSimple = addOns.map((item) => ({
        label: item.name,
        value: item,
      }));
      setAddOns(addOnsSimple);
    });
  };

  const cellStyle = (date) => {
    if (date.getTime() <= new Date().getTime()) return "bg-gray";
    if (unavailableDates.includes(date.getTime())) return "bg-gray";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!date) {
      setDateError(true);
      return;
    }
    basket.setOrderDate(date);
    basket.setOrderComment(note);
    navigate("/checkout/customer");
  };

  return (
    <div className="flex flex-col m-8">
      <h1
        style={{
          fontFamily: "Roboto",
        }}
        className="text-2xl font-light text-sandal-yellow mb-2 tracking-wider"
      >
        PICNIC ARRANGEMENTS
      </h1>
      <div className="flex flex-row py-4 h-28 pb-6">
        <img src="/src/assets/img/calendar-icon.svg" className="mr-4 w-14" />
        <div className="flex flex-col">
          <CheckoutLabel>Date</CheckoutLabel>
          <InputGroup
            className={`z-40 ${!dateError ? "" : "border-2 border-rose-400"}`}
          >
            <DateInput value={date} className="w-48" />
            <InputGroup.Addon onClick={() => setShowCalendar(!showCalendar)}>
              <CalendarIcon />
            </InputGroup.Addon>
            {showCalendar && (
              <div className="bg-white absolute top-8 right-0 sm:left-0 shadow-lg w-80">
                <Calendar
                  compact
                  bordered
                  onSelect={(date) => {
                    if (date.getTime() <= new Date().getTime()) return;
                    if (unavailableDates.includes(date.getTime())) return;
                    const weekday = date.getDay();
                    if (weekday === 1 || weekday === 2) return;
                    setDateError(false);
                    setDate(date);
                    setShowCalendar(false);
                  }}
                  cellClassName={(date) => cellStyle(date)}
                />
              </div>
            )}
          </InputGroup>
          {!dateError ? (
            <></>
          ) : (
            <p className="text-sm text-rose-600">This field is required</p>
          )}
        </div>
      </div>
      <div className="flex flex-row py-4">
        <img src="/src/assets/img/clock-icon.svg" className="mr-4 w-14" />
        <div className="flex flex-col">
          <CheckoutLabel>Time</CheckoutLabel>
          <p
            style={{ color: "#717273", fontFamily: "Roboto" }}
            className="tracking-widest"
          >
            10:30am - 12:30pm
          </p>
        </div>
      </div>
      <div className="flex flex-row py-4">
        <img src="/src/assets/img/addition-icon.svg" className="mr-4 w-14" />
        <div className="flex flex-col">
          <CheckoutLabel>Additions</CheckoutLabel>
          <Dropdown title="Select" onOpen={getAdditions}>
            <AddonList basket={basket} addOns={addOns} />
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-row py-4">
        <TbAbc className="text-sandal-yellow h-14 w-14" />
        <div className="flex flex-col w-2/3 ml-4">
          <CheckoutLabel>Notes</CheckoutLabel>
          <Input
            value={note}
            onChange={(value) => setNote(value)}
            as="textarea"
            rows={3}
            placeholder="Enter comments here..."
            className="w-full"
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="rounded h-8 w-48 bg-sandal-yellow hover:bg-amber-200 mx-auto sm:ml-20 mt-8"
      >
        <span
          style={{ fontFamily: "Roboto" }}
          className="text-white font-light text-md"
        >
          Continue
        </span>
      </button>
    </div>
  );
}

export default ArrangementForm;
