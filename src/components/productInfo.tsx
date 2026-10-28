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
    <section>
      <p className="text-sm font-bold uppercase">{product.company}</p>
      <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>

      <p className="mt-4 text-2xl font-bold">
        ${product.price.toFixed(2)} <span className="text-base">{product.discount}%</span>
      </p>
      <p className="line-through">${product.originalPrice.toFixed(2)}</p>

      <div className="mt-6 flex gap-4">
        <div className="flex items-center gap-6">
          <button onClick={() => setQuantity((current) => Math.max(0, current - 1))} aria-label="Decrease quantity" className="cursor-pointer">
            <img src={minusIcon} alt="" />
          </button>
          <span aria-live="polite">{quantity}</span>
          <button onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity" className="cursor-pointer">
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <button onClick={handleAdd} className="flex cursor-pointer items-center gap-2 border px-6 py-3">
          <img src={cartIcon} alt="" />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
