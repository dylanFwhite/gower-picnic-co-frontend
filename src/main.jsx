import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BasketProvider } from "./context/basket.jsx";
import { CustomerProvider } from "./context/customer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomerProvider>
    <BasketProvider>
      <App />
    </BasketProvider>
  </CustomerProvider>
);
