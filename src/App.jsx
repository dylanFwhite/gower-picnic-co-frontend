import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import { homeLoader } from "./pages/home/homeLoader";
import BasketPage from "./pages/BasketPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentStatus from "./components/PaymentStatus";

import "./App.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/100.css"; // Specify weight
import "@fontsource/roboto/100-italic.css"; // Specify weight and style
import "rsuite/Calendar/styles/index.css";
import "rsuite/Input/styles/index.css";
import "rsuite/DateInput/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import "rsuite/SelectPicker/styles/index.css";
import "rsuite/Dropdown/styles/index.css";

import CheckoutForm from "./components/CheckoutForm";
import CustomerForm from "./components/CustomerForm";
import ArrangementForm from "./components/ArrangementForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/picnics",
        element: <ProductPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/checkout",
        element: <BasketPage />,
        children: [
          {
            index: true,
            element: <ArrangementForm />,
          },
          {
            path: "customer",
            element: <CustomerForm />,
          },
          {
            path: "payment",
            element: <CheckoutPage />,
            children: [
              {
                index: true,
                element: <CheckoutForm />,
              },
              {
                path: "confirmation",
                element: <PaymentStatus />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
