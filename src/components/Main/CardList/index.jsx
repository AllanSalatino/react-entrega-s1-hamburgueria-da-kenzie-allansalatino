import { Card } from "../Card";
import { ProductList } from "./style";

export const CardList = ({ productList, addProductCart, filtredList, isFiltred }) => {
  return (
    <ProductList>
      {(isFiltred ? filtredList : productList).map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            addProductCart={addProductCart}
          ></Card>
        );
      })}
    </ProductList>
  );
};
