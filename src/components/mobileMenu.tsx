import { useEffect, useRef } from "react";
import closeIcon from "../assets/images/icon-close.svg";

type MobileMenuProps = {
  links: string[];
  onClose: () => void;
};

function MobileMenu({ links, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label="Main menu"
      className="fixed inset-y-0 left-0 m-0 h-full max-h-none w-64 bg-white p-6 backdrop:bg-black/75 md:hidden">
      <button onClick={() => dialogRef.current?.close()} aria-label="Close menu" className="cursor-pointer">
        <img src={closeIcon} alt="" />
      </button>

      <ul className="mt-12 grid gap-5 font-bold">
        {links.map((link) => (
          <li key={link}>
            <a href="#" onClick={() => dialogRef.current?.close()}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </dialog>
  );
}

export default MobileMenu;
