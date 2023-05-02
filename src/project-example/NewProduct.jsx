import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const NewProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/products", form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Discount</Form.Label>
          <Form.Control
            name="discountPercentage"
            type="number"
            placeholder="Discount"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            name="brand"
            type="text"
            placeholder="Brand"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            type="text"
            placeholder="Category"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            name="thumbnail"
            type="text"
            placeholder="Picture"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add product
        </Button>
      </Form>
    </div>
  );
};
