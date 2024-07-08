import axios from "axios";
import useCustomer from "../customHooks/useCustomer";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          onChange={handleFirstNameChange}
          type="text"
          name="first-name"
          id="first-name"
          value={customer.firstName}
          required
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          onChange={handleLastNameChange}
          type="text"
          name="last-name"
          id="last-name"
          value={customer.lastName}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          value={customer.email}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          onChange={handlePhoneChange}
          type="tel"
          name="phone"
          id="phone"
          value={customer.phone}
          required
        />
      </div>
      <button type="submit" style={{ background: "#F6C157" }}>
        Make Payment
      </button>
    </form>
  );
}
