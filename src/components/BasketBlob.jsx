function BasketBlob({ count }) {
  return (
    <span className="absolute flex h-3 w-3 md:h-4 md:w-4 bottom-1 right-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <div className="flex items-center justify-center relative rounded-full h-3 w-3 md:h-4 md:w-4 bg-sky-500 text-xs md:text-sm">
        {count || ""}
      </div>
    </span>
  );
}

export default BasketBlob;
