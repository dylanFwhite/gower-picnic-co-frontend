function CheckoutTotal({ basketItems }) {
  let total = 0;
  if (basketItems.length > 0) {
    total = basketItems
      .map((item) => item.price)
      .reduce((acc, curr) => acc + curr);
  }
  return (
    <div className="flex mb-6">
      <span
        style={{ fontFamily: "Roboto", color: "#5C5C5C" }}
        className="font-light text-xl"
      >
        Total:{" "}
        {new Intl.NumberFormat("en-UK", {
          style: "currency",
          currency: "GBP",
        }).format(total)}
      </span>
    </div>
  );
}

export default CheckoutTotal;
