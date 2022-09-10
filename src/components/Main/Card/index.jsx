import { Button } from "../../Buttons/style";
import {
  Cards,
  ImageCard,
  NameCard,
  PriceCard,
  ProductCard,
  SectionImage,
} from "./style";

export const Card = ({ product, addProductCart }) => {
  return (
    <Cards>
      <SectionImage>
        <ImageCard src={product.img} alt={`Foto de ${product.name}`} />
      </SectionImage>
      <NameCard>{product.name}</NameCard>
      <ProductCard>{product.category}</ProductCard>
      <PriceCard>R$ {product.price}{product.price.toString().includes("99") ? "" : ".00"}</PriceCard>
      <Button onClick={() => addProductCart(product)}>Adicionar</Button>
    </Cards>
  );
};
