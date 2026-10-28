import { product } from "../data/product";

type ThumbnailsProps = {
  active: number;
  onSelect: (index: number) => void;
};

function Thumbnails({ active, onSelect }: ThumbnailsProps) {
  return (
    <div className="mt-8 flex gap-4">
      {product.images.map((image, index) => (
        <button
          key={image.thumbnail}
          onClick={() => onSelect(index)}
          aria-label={`Show image ${index + 1}`}
          aria-pressed={index === active}
          className={`w-20 cursor-pointer overflow-hidden rounded-lg border-2 ${
            index === active ? "border-orange opacity-50" : "border-transparent"
          }`}>
          <img src={image.thumbnail} alt="" />
        </button>
      ))}
    </div>
  );
}

export default Thumbnails;
