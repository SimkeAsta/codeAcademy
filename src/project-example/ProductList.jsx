import { products } from "./data/products";
import { ProductItem } from "./ProductItem";
import { Container } from "./styles/StyledProduct";

export const ProductList = () => {
  return (
    <Container>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Container>
  );
};
