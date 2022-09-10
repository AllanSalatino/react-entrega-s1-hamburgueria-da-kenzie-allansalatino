import React from "react";
import { Total } from "./style";

function TotalPrice({ cartList, setCartList }) {
  const total = cartList
    .reduce((previus, current) => {
      return previus + current.price;
    }, 0)
  return (
    <>
      {total > 0 && (
        <Total>
          <div>
            <p>Total</p>
            <span>
              R$
              {total.toFixed(2)}
            </span>
          </div>
          <button onClick={() => setCartList([])}>Remover todos</button>
        </Total>
      )}
    </>
  );
}

export default TotalPrice;
