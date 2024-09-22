import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import AddonListItem from "./AddonListItem";

function AddonList({ basket, addOns }) {
  if (addOns.length === 0) {
    return (
      <p style={{ padding: 4, color: "#999", textAlign: "center" }}>
        <SpinnerIcon spin /> loading...
      </p>
    );
  }
  return addOns.map((item) => (
    <AddonListItem key={item.value._id} basket={basket} item={item} />
  ));
}

export default AddonList;
