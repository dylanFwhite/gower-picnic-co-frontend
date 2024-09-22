import { useState } from "react";
import { DateInput, Calendar, InputGroup } from "rsuite";
import Input from "rsuite/Input";
import CalendarIcon from "@rsuite/icons/Calendar";
import Dropdown from "rsuite/Dropdown";
import { TbAbc } from "react-icons/tb";
import { getAddOns } from "../api/getProducts";
import useBasket from "../customHooks/useBasket";
import { useNavigate } from "react-router-dom";

import CheckoutLabel from "./CheckoutLabel";
import AddonList from "./AddonList";

function ArrangementForm() {
  const navigate = useNavigate();

  const basket = useBasket();
  const [showCalendar, setShowCalendar] = useState(false);

  const [date, setDate] = useState(null);
  const [note, setNote] = useState("");
  const [addOns, setAddOns] = useState([]);

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
      <div className="flex flex-row py-4">
        <img src="/src/assets/img/calendar-icon.svg" className="mr-4 w-14" />
        <div className="flex flex-col">
          <CheckoutLabel>Date</CheckoutLabel>
          <InputGroup
            className="z-40"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <DateInput value={date} className="w-48" />
            <InputGroup.Addon>
              <CalendarIcon />
            </InputGroup.Addon>
            {showCalendar && (
              <div className="bg-white absolute top-8 shadow-lg w-96">
                <Calendar
                  compact
                  bordered
                  onSelect={(date) => setDate(date)}
                  cellClassName={(date) => cellStyle(date)}
                />
              </div>
            )}
          </InputGroup>
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
        className="rounded h-8 w-48 bg-sandal-yellow hover:bg-amber-200 ml-20 mt-8"
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
