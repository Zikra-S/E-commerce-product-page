import { useState } from "react";
import { product } from "../data/product";

function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section aria-label="Product images">
      <img
        src={product.images[active].full}
        alt={`${product.name}, view ${active + 1}`}
        className="w-full"
      />

      <div className="mt-4 flex gap-4">
        {product.images.map((image, index) => (
          <button
            key={image.thumbnail}
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={index === active}
            className={`w-20 cursor-pointer overflow-hidden rounded-lg border-2 ${
              index === active ? "border-orange-500 opacity-50" : "border-transparent"
            }`}
          >
            <img src={image.thumbnail} alt="" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Gallery;