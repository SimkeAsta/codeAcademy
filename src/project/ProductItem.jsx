import { Card, Container, CardImage } from "./styles/StyledProduct";

export const ProductItem = () => {
  return (
    <Container>
      <Card>
        <p>Title</p>
        <p>Brand</p>
        <CardImage src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" />
      </Card>
    </Container>
  );
};
