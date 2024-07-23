import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import PicnicsPage from "./pages/PicnicsPage";
import HamperPage from "./pages/HamperPage";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import { homeLoader } from "./pages/home/homeLoader";
import BasketPage from "./pages/BasketPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentStatus from "./components/PaymentStatus";

import "./App.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/100.css"; // Specify weight
import "@fontsource/roboto/100-italic.css"; // Specify weight and style

import CheckoutForm from "./components/CheckoutForm";
import CustomerForm from "./components/CustomerForm";
import BasketList from "./components/BasketList";

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
        element: <PicnicsPage />,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/hamper",
        element: <HamperPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/checkout",
        element: <BasketPage />,
        children: [
          {
            index: true,
            element: <BasketList />,
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
