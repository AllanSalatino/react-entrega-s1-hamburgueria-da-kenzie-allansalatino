import { CardList } from "./CardList";
import { MainTag } from "./style";

export const Main = ({ productList, addProductCart, filtredList, isFiltred }) => {
  return (
    <MainTag>
      <CardList
        productList={productList}
        addProductCart={addProductCart}
        filtredList={filtredList}
        isFiltred={isFiltred}
      ></CardList>
    </MainTag>
  );
};
