import { useState } from "react";
import { products } from "./data/products";
import { ProductItem } from "./ProductItem";
import { Container } from "./styles/StyledProduct";
import { Modal, Button } from 'react-bootstrap';
import { Toast } from "../components/Toast";

export const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [addedToCartProduct, setAddedToCartProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct(product);
  };

  const handleModalClose = () => {
    setActiveProduct(null);
  };

  const handleAddToCart = () => {
    console.log('Įdėta į krepšelį');
    setAddedToCartProduct(activeProduct);
    setActiveProduct(null);
  };

  return (
    <>
      <Container>
        {products.map((product) => (
          <ProductItem product={product} onClick={handleProductClick} />
        ))}
      </Container>

      <Toast 
        show={addedToCartProduct} 
        onClose={() => setAddedToCartProduct(null)} 
        body={`Produktas ${addedToCartProduct?.title} pridėtas į jūsų krepšelį`} 
      />

      {/* <ToastContainer position="top-center">
        <Toast show={addedToCartProduct} autohide delay={3000} onClose={() => setAddedToCartProduct(null)}>
          <Toast.Header />
          <Toast.Body>
            Produktas {addedToCartProduct?.title} pridėtas į jūsų krepšelį
          </Toast.Body>
        </Toast>
      </ToastContainer> */}

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
