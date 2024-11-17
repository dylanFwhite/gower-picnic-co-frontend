import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { GoCheckCircle } from "react-icons/go";
import { SlClose } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import useBasket from "../customHooks/useBasket";

const PaymentStatus = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const basket = useBasket();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage(
            `A Confirmation email will be sent to ${paymentIntent.receipt_email}`
          );
          setLoading(false);
          break;

        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setMessage("Payment failed. Please try another payment method.");
          setSuccess(false);
          setLoading(false);
          break;

        default:
          setMessage("Something went wrong.");
          setSuccess(false);
          setLoading(false);
          break;
      }
    });
  }, [stripe]);

  const handleClickSuccess = () => {
    basket.clearBasketItems();
    navigate("/shop");
  };
  const handleClickFailure = () => {
    navigate("/checkout");
  };

  const successPage = (
    <div className="h-full flex flex-col items-center justify-center">
      <GoCheckCircle className="h-14 w-14 text-emerald-200  mb-6" />
      <h1
        style={{
          fontFamily: "Roboto",
        }}
        className="text-2xl font-normal mb-6 tracking-wider"
      >
        Success!
      </h1>
      <h3
        style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
        className="font-light text-center text-xl mb-6"
      >
        {message}
      </h3>
      <button
        className="rounded h-8 w-40 mt-4 mx-auto bg-sandal-yellow hover:bg-amber-200"
        onClick={handleClickSuccess}
      >
        <span
          style={{ fontFamily: "Roboto" }}
          className="text-white font-light text-md"
        >
          Continue Shopping
        </span>
      </button>
    </div>
  );
  const failurePage = (
    <div className="h-full flex flex-col items-center justify-center">
      <SlClose className="h-14 w-14 text-rose-400  mb-6" />
      <h1
        style={{
          fontFamily: "Roboto",
        }}
        className="text-2xl font-normal mb-6 tracking-wider"
      >
        Payment Failed!
      </h1>
      <h3
        style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
        className="font-light text-center text-xl mb-6"
      >
        {message}
      </h3>
      <button
        className="rounded h-8 w-40 mt-4 mx-auto bg-sandal-yellow hover:bg-amber-200"
        onClick={handleClickFailure}
      >
        <span
          style={{ fontFamily: "Roboto" }}
          className="text-white font-light text-md"
        >
          Retry Payment
        </span>
      </button>
    </div>
  );
  const loadingPage = (
    <div className="h-full flex items-center justify-center">
      <svg
        className="animate-spin h-10 w-10 mr-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          strokeWidth="8"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );

  return loading ? loadingPage : success ? successPage : failurePage;
};

export default PaymentStatus;
