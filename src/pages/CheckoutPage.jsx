import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import useCustomer from "../customHooks/useCustomer";
import useBasket from "../customHooks/useBasket";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TOKEN);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const customer = useCustomer();
  const basket = useBasket();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // If redirected from Stripe then do not re-initialise
    const stripeRedirect = new URLSearchParams(window.location.search).get(
      "payment_redirect"
    );

    if (stripeRedirect) {
      // Retrieve the "payment_intent_client_secret" query parameter appended to
      // your return_url by Stripe.js
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );
      setClientSecret(clientSecret);
      return;
    }

    // If there is no customer or Basket information then the user should
    // not be at the payment step - navigate to home
    if (!customer.id || basket.basketItems.length === 0) {
      navigate("../..", { relative: "path" });
      return;
    }

    axios
      .post("/api/v1/checkout/create-payment-intent", {
        collectionDate: basket.orderDate,
        productIds: basket.basketItems.map((item) => item._id),
        note: basket.orderComment,
        customer: customer.id,
        customerEmail: customer.email,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [customer, basket, navigate]);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#f6c157",
      colorText: "#A0A0A0",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Outlet />
        </Elements>
      )}
    </>
  );
}
