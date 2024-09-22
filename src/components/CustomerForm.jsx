import axios from "axios";
import useCustomer from "../customHooks/useCustomer";
import { useNavigate } from "react-router-dom";
import Input from "rsuite/Input";

import CheckoutLabel from "./CheckoutLabel";

export default function CustomerForm() {
  const customer = useCustomer();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: customer.firstName + " " + customer.lastName,
      email: customer.email,
      phone: customer.phone,
    };

    try {
      const res = await axios.post("/api/v1/customers", data);
      const { _id } = res.data.data;
      customer.setId(_id);
      navigate("../payment");
    } catch (error) {
      // TODO: Add message that there was an issue
      console.log(error);
    }
  };

  const handleFirstNameChange = (event) => {
    customer.setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    customer.setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    customer.setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    customer.setPhone(event.target.value);
  };

  // TODO: Implement Form validation so that user cannot submit form without
  // Correctly populating all fields

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-8">
      <h1
        style={{
          fontFamily: "Roboto",
        }}
        className="text-2xl font-light text-sandal-yellow mb-2 tracking-wider"
      >
        CUSTOMER DETAILS
      </h1>
      <div className="flex flex-col mt-4">
        <CheckoutLabel>First Name</CheckoutLabel>
        <Input
          className="max-w-xs"
          value={customer.firstName}
          onChange={(str, e) => handleFirstNameChange(e)}
          required
        />
      </div>
      <div className="flex flex-col mt-4">
        <CheckoutLabel>Last Name</CheckoutLabel>
        <Input
          className="max-w-xs"
          value={customer.lastName}
          onChange={(str, e) => handleLastNameChange(e)}
          required
        />
      </div>
      <div className="flex flex-col mt-4">
        <CheckoutLabel>Email</CheckoutLabel>
        <Input
          className="max-w-xs"
          value={customer.email}
          type="email"
          onChange={(str, e) => handleEmailChange(e)}
          required
        />
      </div>
      <div className="flex flex-col mt-4">
        <CheckoutLabel>Phone</CheckoutLabel>
        <Input
          className="max-w-xs"
          value={customer.phone}
          type="tel"
          onChange={(str, e) => handlePhoneChange(e)}
          required
        />
      </div>
      <button
        type="submit"
        className="rounded h-8 w-48 bg-sandal-yellow hover:bg-amber-200 mt-8"
      >
        <span
          style={{ fontFamily: "Roboto" }}
          className="text-white font-light text-md"
        >
          Continue
        </span>
      </button>
    </form>
  );
}
