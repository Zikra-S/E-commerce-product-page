import { useEffect, useRef, useState } from "react";
import { product } from "../data/product";
import Thumbnails from "./thumbnails";
import closeIcon from "../assets/images/icon-close.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import nextIcon from "../assets/images/icon-next.svg";

type LightboxProps = {
  startIndex: number;
  onClose: () => void;
};

function Lightbox({ startIndex, onClose }: LightboxProps) {
  const [active, setActive] = useState(startIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const total = product.images.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const previous = () => setActive((current) => (current - 1 + total) % total);
  const next = () => setActive((current) => (current + 1) % total);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label="Product image gallery"
      className="m-auto w-137.5 max-w-[90vw] overflow-visible bg-transparent p-0 backdrop:bg-black/75">
      <div className="mb-6 flex justify-end">
        <button onClick={() => dialogRef.current?.close()} aria-label="Close gallery" className="cursor-pointer">
          <img src={closeIcon} alt="" className="brightness-0 invert" />
        </button>
      </div>

      <div className="relative">
        <button
          onClick={previous}
          aria-label="Previous image"
          className="absolute left-0 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white">
          <img src={previousIcon} alt="" />
        </button>

        <img src={product.images[active].full} alt={`${product.name}, view ${active + 1}`} className="w-full rounded-2xl" />

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-0 top-1/2 grid size-12 -translate-y-1/2 translate-x-1/2 cursor-pointer place-items-center rounded-full bg-white">
          <img src={nextIcon} alt="" />
        </button>
      </div>

      <div className="flex justify-center">
        <Thumbnails active={active} onSelect={setActive} />
      </div>
    </dialog>
  );
}

export default Lightbox;
