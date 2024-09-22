function CheckoutLabel({ children }) {
  return (
    <label
      style={{ color: "#A0A0A0", fontFamily: "Roboto" }}
      className="uppercase font-light text-sm tracking-widest"
    >
      {children}
    </label>
  );
}

export default CheckoutLabel;
