import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import deleteIcon from "../assets/images/icon-delete.svg";

function CartPanel({ onClose }: { onClose: () => void }) {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div
      id="cart-panel"
      className="fixed left-2 right-2 top-19 z-10 rounded-lg bg-white shadow-2xl md:absolute md:left-auto md:top-full md:-right-19 md:mt-4 md:w-90">
      <h2 className="border-b border-grayish/50 p-6 font-bold">Cart</h2>

      {cart.length === 0 ? (
        <p className="flex h-48 items-center justify-center font-bold text-muted">Your cart is empty.</p>
      ) : (
        <div className="p-6">
          {cart.map((item) => (
            <div key={item.id} className="mb-6 flex items-center gap-4">
              <img src={item.thumbnail} alt="" className="size-12.5 rounded" />

              <p className="flex-1 text-muted">
                {item.name}
                <br />${item.price.toFixed(2)} x {item.quantity} <strong className="text-ink">${(item.price * item.quantity).toFixed(2)}</strong>
              </p>

              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                aria-label={`Delete ${item.name}`}
                className="cursor-pointer hover:opacity-60">
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          ))}

          <button onClick={onClose} className="h-14 w-full cursor-pointer rounded-lg bg-orange font-bold text-ink hover:opacity-60">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPanel;
