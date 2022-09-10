import {
  ButtonRemove,
  CardsCart,
  ContainerCard,
  DivNameProduct,
  Image,
  Name,
  Product,
} from "./style";

export const ShoppingCard = ({ product, removeProductCart }) => {
  return (
    <CardsCart>
      <ContainerCard>
        <Image src={product.img} alt=""></Image>
        <DivNameProduct>
          <Name>{product.name}</Name>
          <Product>{product.category}</Product>
        </DivNameProduct>
      </ContainerCard>
      <ButtonRemove onClick={() => removeProductCart(product)}>Remover</ButtonRemove>
    </CardsCart>
  );
};
