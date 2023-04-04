import {
  Card,
  CardImage,
  Price,
  Title,
  DiscountedPrice,
  HeaderWrapper,
  TitleContainer,
  Discount,
  New,
  BrandTitle,
} from "./styles/StyledProduct";

export const ProductItem = ({ product }) => {
  const { title, thumbnail, brand, price, discountPercentage } = product;

  const discountedPrice = discountPercentage
    ? Math.round(price * ((100 - discountPercentage) / 100))
    : "";

  return (
    <Card>
      <HeaderWrapper>
        <TitleContainer>
          <BrandTitle>{brand}</BrandTitle>
          <Title>{title}</Title>
        </TitleContainer>
        {discountPercentage ? (
          <Discount>{discountPercentage}&#37;</Discount>
        ) : (
          <New>New</New>
        )}
      </HeaderWrapper>
      <CardImage src={thumbnail} />
      {discountedPrice ? (
        <Price withDiscount>
          <DiscountedPrice>{price} &euro;</DiscountedPrice>
          {discountedPrice} &euro;
        </Price>
      ) : (
        <Price>{price} &euro;</Price>
      )}
    </Card>
  );
};
