import { useEffect, useRef, useState } from "react";
import { product } from "../data/product";
import Thumbnails from "./thumbnails";

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
      className="m-auto w-125 max-w-[90vw] overflow-visible bg-transparent p-0 backdrop:bg-black/75">
      <div className="mb-6 flex justify-end">
        <button onClick={() => dialogRef.current?.close()} aria-label="Close gallery" className="cursor-pointer text-white hover:text-orange">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            <path d="M3 3l12 12M15 3 3 15" />
          </svg>
        </button>
      </div>

      <div className="relative">
        <button
          onClick={previous}
          aria-label="Previous image"
          className="absolute left-0 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white text-ink hover:text-orange">
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M10 2 3 9l7 7" />
          </svg>
        </button>

        <img src={product.images[active].full} alt={`${product.name}, view ${active + 1}`} className="w-full rounded-2xl" />

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-0 top-1/2 grid size-12 -translate-y-1/2 translate-x-1/2 cursor-pointer place-items-center rounded-full bg-white text-ink hover:text-orange">
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="m2 2 7 7-7 7" />
          </svg>
        </button>
      </div>

      <Thumbnails active={active} onSelect={setActive} className="mt-10 justify-center gap-8" />
    </dialog>
  );
}

export default Lightbox;
