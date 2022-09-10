import { ShoppingCard } from "../ShoppingCard";
import { List } from "./style";

export const ShoppingList = ({ cartList, removeProductCart }) => {
  return (
    <List>
      {cartList.length ?
      cartList.map((product, index) => {
        return (
          <ShoppingCard
            key={index}
            product={product}
            removeProductCart={removeProductCart}
          ></ShoppingCard>
        );
      })
      :
      <div>
        <h1>Sua sacola está vazia</h1>
        <p>Adicione itens</p>
      </div>
      }
    </List>
  );
};
