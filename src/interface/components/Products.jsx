import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../../useCases/context/CartContext";
import Cart from "./Cart";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      <h1>Shopping Cart</h1>

      {!showModal && (
        <Button variant="success" onClick={toggle}>
          Cart ({cartItems.length})
        </Button>
      )}

      <Row>
        {products.map((item) => (
          <Col md={3} key={item.id}>
            <Card
              image={item.thumbnail}
              title={item.title}
              description={item.description}
              price={item.price}
              func={() => addToCart(item)}  // Fix: pass the individual product
            />
          </Col>
        ))}
      </Row>

      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
};

export default Products;
