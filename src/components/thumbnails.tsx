import { product } from "../data/product";

type ThumbnailsProps = {
  active: number;
  onSelect: (index: number) => void;
  className?: string;
};

function Thumbnails({ active, onSelect, className = "" }: ThumbnailsProps) {
  return (
    <div className={`flex ${className}`}>
      {product.images.map((image, index) => {
        const isActive = index === active;

        return (
          <button
            key={image.thumbnail}
            onClick={() => onSelect(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={isActive}
            className={`size-22 cursor-pointer overflow-hidden rounded-[10px] border-2 bg-white ${
              isActive ? "border-orange" : "border-transparent"
            }`}>
            <img src={image.thumbnail} alt="" className={isActive ? "opacity-25" : "hover:opacity-50"} />
          </button>
        );
      })}
    </div>
  );
}

export default Thumbnails;
