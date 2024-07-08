import { Link } from "react-router-dom";

export default function BasketList() {
  return (
    <>
      <div>
        Basket Item 1<br />
        Basket Item 1<br />
        Basket Item 1
      </div>
      <button style={{ background: "#F6C157" }}>
        <Link className="w-full" to="customer">
          Checkout
        </Link>
      </button>
    </>
  );
}
