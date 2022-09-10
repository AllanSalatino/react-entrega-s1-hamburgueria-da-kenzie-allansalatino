import { ShoppingList } from "../ShoppingList";
import { Aside } from "../style";
import TotalPrice from "../TotalPrice";
import { ContainerCart, Title, TitleSection } from "./style";

export const ShoppingCart = ({ cartList, removeProductCart, setCartList }) => {
  return (
    <Aside>
      <ContainerCart>
        <TitleSection>
          <Title>Carrinho de compras</Title>
        </TitleSection>
        <ShoppingList
          cartList={cartList}
          removeProductCart={removeProductCart}
        ></ShoppingList>
      </ContainerCart>
      {cartList.length && (
        <TotalPrice setCartList={setCartList} cartList={cartList} />
      )}
    </Aside>
  );
};
