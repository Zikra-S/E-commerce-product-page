import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type Action = { type: "ADD_ITEM"; item: Omit<CartItem, "quantity">; quantity: number } | { type: "REMOVE_ITEM"; id: number };

function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.find((item) => item.id === action.item.id);

      if (exists) {
        return state.map((item) => (item.id === action.item.id ? { ...item, quantity: item.quantity + action.quantity } : item));
      }

      return [...state, { ...action.item, quantity: action.quantity }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<Action>;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  dispatch: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(reducer, []);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
}
