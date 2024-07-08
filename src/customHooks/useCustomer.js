import { useContext } from "react";
import CustomerContext from "../context/customer";

export default function () {
  const customer = useContext(CustomerContext);
  return customer;
}
