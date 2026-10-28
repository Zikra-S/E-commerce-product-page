import { useState } from "react";
import { product } from "../data/product";
import Thumbnails from "./thumbnails";
import Lightbox from "./lightbox";

function Gallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section aria-label="Product images">
      <button
        onClick={() => setLightboxOpen(true)}
        aria-label="Open image gallery"
        className="block w-full cursor-zoom-in"
      >
        <img
          src={product.images[active].full}
          alt={`${product.name}, view ${active + 1}`}
          className="w-full"
        />
      </button>

      <Thumbnails active={active} onSelect={setActive} />

      {lightboxOpen && (
        <Lightbox startIndex={active} onClose={() => setLightboxOpen(false)} />
      )}
    </section>
  );
}

export default Gallery;