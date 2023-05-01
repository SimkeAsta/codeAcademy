import { Form, Button } from "react-bootstrap";

export const NewProduct = () => {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="number" placeholder="Discount" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" placeholder="Stock" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Brand" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Category" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="text" placeholder="Picture" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add product
        </Button>
      </Form>
    </div>
  );
};
