export const getAvailability = (date) => {
  const weekday = date.getDay();
  switch (weekday) {
    case 1:
      return null;
    case 2:
      return null;
  }
  const day = date.getDate();
  switch (day) {
    case 14:
      return "3";
    case 15:
      return "2";
    case 10:
      return "1";
    case 5:
      return "4";
    default:
      return "4+";
  }
};

export const renderCell = (date) => {
  const count = getAvailability(date);
  if (!count) return;
  return (
    <div className="flex items-center justify-center rounded-full h-5 w-5 bg-sandal-yellow text-white text-xs">
      {count || ""}
    </div>
  );
};

export const cellStyle = (date) => {
  const weekday = date.getDay();
  switch (weekday) {
    case 1:
      return "bg-gray";
    case 2:
      return "bg-gray";
    default:
      return undefined;
  }
};
