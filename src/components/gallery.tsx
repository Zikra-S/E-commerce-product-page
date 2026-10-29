import { useState } from "react";
import { product } from "../data/product";
import Thumbnails from "./thumbnails";
import Lightbox from "./lightbox";
import previousIcon from "../assets/images/icon-previous.svg";
import nextIcon from "../assets/images/icon-next.svg";

function Gallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = product.images.length;

  const previous = () => setActive((current) => (current - 1 + total) % total);
  const next = () => setActive((current) => (current + 1) % total);

  const image = product.images[active];
  const alt = `${product.name}, view ${active + 1}`;

  return (
    <section aria-label="Product images">
      <div className="relative md:hidden">
        <img src={image.full} alt={alt} className="w-full" />

        <button
          onClick={previous}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white"
        >
          <img src={previousIcon} alt="" />
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white"
        >
          <img src={nextIcon} alt="" />
        </button>
      </div>

      <button
        onClick={() => setLightboxOpen(true)}
        aria-label="Open image gallery"
        className="hidden w-full cursor-zoom-in md:block"
      >
        <img src={image.full} alt={alt} className="w-full rounded-2xl" />
      </button>

      <div className="hidden md:block">
        <Thumbnails
          active={active}
          onSelect={setActive}
          className="mt-8 justify-between"
        />
      </div>

      {lightboxOpen && (
        <Lightbox startIndex={active} onClose={() => setLightboxOpen(false)} />
      )}
    </section>
  );
}

export default Gallery;