import { useContext } from "react";
import { CartContext } from "./context/cartContext";
import Gallery from "./components/gallery";
import ProductInfo from "./components/productInfo";

function App() {
  const { cart, dispatch } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="mx-auto grid max-w-4xl gap-10 p-6 md:grid-cols-2">
      <Gallery />
      <ProductInfo />

      <div className="md:col-span-2">
        <h2 className="font-bold">Cart ({totalItems})</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-2">
              <p>
                {item.name}: ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })} className="cursor-pointer border px-2">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default App;
