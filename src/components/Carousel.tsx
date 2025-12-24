import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setIndex(0);
    setReady(false);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
        No images available
      </div>
    );
  }

  const next = () => setIndex((i) => (i + 1) % images.length);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
      <img
        src={images[index]}
        className="w-full h-full object-contain pointer-events-none select-none"
        onLoad={() => setReady(true)}
      />

      {!ready && "Loading"}

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded shadow hover:bg-accent hover:text-black transition-all duration-500 ease-in-out"
        >
          <FaArrowLeft />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2 py-1 rounded shadow hover:bg-accent hover:text-black transition-all duration-500 ease-in-out"
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default Carousel;
