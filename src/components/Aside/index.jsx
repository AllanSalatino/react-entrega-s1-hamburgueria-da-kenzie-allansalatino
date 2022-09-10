import { ShoppingCart } from "./ShoppingCart";

export const Aside = ({ cartList, removeProductCart, setCartList }) => {
  return (
    <ShoppingCart
      setCartList={setCartList}
      cartList={cartList}
      removeProductCart={removeProductCart}
    ></ShoppingCart>
  );
};
