import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../useCases/context/CartContext';
import { Modal, Button } from 'react-bootstrap';

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  return (
    <Modal show={showModal} onHide={toggle} centered>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div className="d-flex justify-content-between align-items-center mb-3" key={item.id}>
                <div className="d-flex gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded img-fluid"
                    style={{ maxHeight: '100px' }}
                  />
                  <div>
                    <h5>{item.title}</h5>
                    <p className="text-muted">${item.price}</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Button variant="outline-dark" size="sm" onClick={() => addToCart(item)}>
                    +
                  </Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline-dark" size="sm" onClick={() => removeFromCart(item)}>
                    -
                  </Button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between mt-3">
              <h5>Total: ${getCartTotal()}</h5>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </Modal.Body>

      {cartItems.length > 0 && (
        <Modal.Footer>
          <Button variant="secondary" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button variant="primary" onClick={toggle}>
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
