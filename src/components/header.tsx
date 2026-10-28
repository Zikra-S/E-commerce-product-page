import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import CartPanel from "./cartPanel";
import MobileMenu from "./mobileMenu";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const links = ["Collections", "Men", "Women", "About", "Contact"];

function Header() {
  const { cart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex items-center justify-between border-b px-6 py-6">
      <div className="flex items-center gap-4 md:gap-10">
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="cursor-pointer md:hidden">
          <img src={menuIcon} alt="" />
        </button>

        <img src={logo} alt="Sneakers" />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="relative flex items-center gap-6"
        onKeyDown={(e) => {
          if (e.key === "Escape") setCartOpen(false);
        }}>
        <button
          onClick={() => setCartOpen((open) => !open)}
          aria-expanded={cartOpen}
          aria-controls="cart-panel"
          aria-label={`Cart, ${totalItems} items`}
          className="relative cursor-pointer">
          <img src={cartIcon} alt="" />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 text-xs font-bold text-white">{totalItems}</span>
          )}
        </button>

        <img src={avatar} alt="" className="size-10 rounded-full" />

        {cartOpen && <CartPanel onClose={() => setCartOpen(false)} />}
      </div>

      {menuOpen && <MobileMenu links={links} onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Header;
