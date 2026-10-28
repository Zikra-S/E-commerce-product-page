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
    <header className="mx-auto flex h-[68px] max-w-[1158px] items-center justify-between border-b border-grayish/50 px-6 md:h-28">
      <div className="flex h-full items-center gap-4 md:gap-14">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="cursor-pointer md:hidden"
        >
          <img src={menuIcon} alt="" />
        </button>

        <img src={logo} alt="Sneakers" className="mb-1 md:mb-0" />

        <nav aria-label="Main" className="hidden h-full md:block">
          <ul className="flex h-full gap-8">
            {links.map((link) => (
              <li
                key={link}
                className="flex h-full items-center border-b-4 border-transparent hover:border-orange"
              >
                <a href="#" className="text-muted hover:text-ink">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="relative flex items-center gap-5 md:gap-11"
        onKeyDown={(e) => {
          if (e.key === "Escape") setCartOpen(false);
        }}
      >
        <button
          onClick={() => setCartOpen((open) => !open)}
          aria-expanded={cartOpen}
          aria-controls="cart-panel"
          aria-label={`Cart, ${totalItems} items`}
          className="relative cursor-pointer"
        >
          <img src={cartIcon} alt="" />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-orange px-2 text-[10px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </button>

        <img
          src={avatar}
          alt=""
          className="size-6 rounded-full border-2 border-transparent hover:border-orange md:size-12"
        />

        {cartOpen && <CartPanel onClose={() => setCartOpen(false)} />}
      </div>

      {menuOpen && <MobileMenu links={links} onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Header;