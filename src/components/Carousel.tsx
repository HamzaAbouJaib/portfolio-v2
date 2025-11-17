import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
      <img src={images[index]} className="w-full h-full object-cover" />

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded shadow hover:bg-accent hover:text-black"
      >
        {"<"}
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded shadow hover:bg-accent hover:text-black"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
