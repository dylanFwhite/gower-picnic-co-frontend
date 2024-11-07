import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useBasket from "../customHooks/useBasket";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const basket = useBasket();

  let total = basket.basketItems
    .map((item) => item.price)
    .reduce((acc, curr) => acc + curr);
  total = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  }).format(total);

  const paymentLabel = "Pay Now (" + total + ")";

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${
          import.meta.env.VITE_FRONTEND_URL
        }/checkout/payment/confirmation?payment_redirect=true`,
      },
    });

    // Only will get reached if there is an error at the previous step,
    // otherwise user will be redirected to return url
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-8">
      <h1
        style={{
          fontFamily: "Roboto",
        }}
        className="text-2xl font-light text-sandal-yellow mb-8 tracking-wider"
      >
        PAYMENT DETAILS
      </h1>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            paymentLabel
          )}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
