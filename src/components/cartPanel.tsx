import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import deleteIcon from "../assets/images/icon-delete.svg";

function CartPanel({ onClose }: { onClose: () => void }) {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div id="cart-panel" className="absolute right-0 top-full z-10 mt-4 w-80 rounded-lg border bg-white shadow-lg">
      <h2 className="border-b p-4 font-bold">Cart</h2>

      {cart.length === 0 ? (
        <p className="p-10 text-center font-bold">Your cart is empty.</p>
      ) : (
        <div className="p-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-2">
              <img src={item.thumbnail} alt="" className="size-12 rounded" />

              <p className="flex-1 text-sm">
                {item.name}
                <br />${item.price.toFixed(2)} x {item.quantity} <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </p>

              <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })} aria-label={`Delete ${item.name}`} className="cursor-pointer">
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          ))}

          <button onClick={onClose} className="mt-4 w-full cursor-pointer rounded-lg bg-orange py-3 font-bold">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPanel;
