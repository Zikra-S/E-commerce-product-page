import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { product } from "../data/product";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import cartIcon from "../assets/images/icon-cart.svg";

function ProductInfo() {
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    if (quantity === 0) return;

    dispatch({
      type: "ADD_ITEM",
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        thumbnail: product.images[0].thumbnail,
      },
      quantity,
    });
    setQuantity(0);
  };

  return (
    <section className="px-6 pb-10 pt-6 md:p-0">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted md:text-[13px]">{product.company}</p>

      <h1 className="mt-4 text-[28px] font-bold leading-tight md:mt-5 md:text-[40px]">{product.name}</h1>

      <p className="mt-4 leading-relaxed text-muted md:mt-8">{product.description}</p>

      <div className="mt-6 flex items-center justify-between md:mt-8 md:block">
        <p className="flex items-center gap-4">
          <span className="text-[28px] font-bold">${product.price.toFixed(2)}</span>
          <span className="rounded-md bg-ink px-2 py-0.5 font-bold text-white">{product.discount}%</span>
        </p>

        <p className="font-bold text-muted line-through md:mt-2">${product.originalPrice.toFixed(2)}</p>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row">
        <div className="flex h-14 items-center justify-between rounded-lg bg-light-grayish px-5 md:w-39.25">
          <button
            onClick={() => setQuantity((current) => Math.max(0, current - 1))}
            aria-label="Decrease quantity"
            className="cursor-pointer hover:opacity-50">
            <img src={minusIcon} alt="" />
          </button>

          <span aria-live="polite" className="font-bold">
            {quantity}
          </span>

          <button onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity" className="cursor-pointer hover:opacity-50">
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <button
          onClick={handleAdd}
          className="flex h-14 flex-1 cursor-pointer items-center justify-center gap-4 rounded-lg bg-orange font-bold text-ink shadow-lg shadow-orange/50 hover:opacity-60">
          <img src={cartIcon} alt="" className="brightness-0" />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
