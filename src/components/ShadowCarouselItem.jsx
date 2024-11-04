function ShadowCarouselItem() {
  return (
    <div className="animate-pulse flex h-525">
      <div className="w-7/12 h-full">
        <div className="m-8 h-8 max-w-48 bg-zinc-200 rounded"></div>
        <div className="h-fill mx-4 grid grid-cols-3 gap-4 p-4">
          <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-3"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-3"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-3"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-2"></div>
          <div className="h-4 bg-zinc-200 rounded col-span-1"></div>
        </div>
        <div className="m-8 flex justify-around">
          <div className="h-8 w-32 bg-zinc-200"></div>
          <div className="h-8 w-32 bg-zinc-200"></div>
        </div>
      </div>
      <div className="flex w-5/12 h-full">
        <div className="bg-zinc-200 h-80 w-80 mx-auto my-auto rounded-lg"></div>
      </div>
    </div>
  );
}

export default ShadowCarouselItem;
