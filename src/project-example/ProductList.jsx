import { useState } from "react";
import { products } from "./data/products";
import { ProductItem } from "./ProductItem";
import { Container } from "./styles/StyledProduct";
import { Modal, Button } from 'react-bootstrap';

export const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct(product);
  };

  const handleModalClose = () => {
    setActiveProduct(null);
  };

  const handleAddToCart = () => {
    console.log('Įdėta į krepšelį');
    setActiveProduct(null);
  };

  return (
    <>
      <Container>
        {products.map((product) => (
          <ProductItem product={product} onClick={handleProductClick} />
        ))}
      </Container>
      <Modal show={activeProduct} onHide={handleModalClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>
            {activeProduct?.title}
            {/* {activeProduct && activeProduct.title} */}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {activeProduct?.description}. Stock: {activeProduct?.stock}
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>Close</Button>
          <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
        </Modal.Footer>
      
      </Modal>
    </>
  );
};
