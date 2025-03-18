import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./CheckoutSuccess.css"; // Import CSS

const CheckoutSuccess = () => {
  const location = useLocation();
  console.log(location,'location')
  const { cartItem, totalPrice, allProducts } = location.state || { cartItem: {}, totalPrice: 0, allProducts: [] };

  return (
    <div className="checkout-success">
      <h2>🎉 Thank You for Your Purchase! 🎉</h2>
      <p>Your order has been successfully placed.</p>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total Price: <strong>${totalPrice}</strong></p>
        <p>Total Items: {Object.values(cartItem).reduce((acc, curr) => acc + curr, 0)}</p>
      </div>

      {/* Purchased Items */}
      <div className="purchased-items">
        <h3>Purchased Items</h3>
        {allProducts.map((product) => {
          if (cartItem[product.id] > 0) {
            return (
              <div key={product.id} className="order-item">
                <img src={product.image} alt={product.name} className="order-img" />
                <p className="order-name">{product.name}</p>
                <p className="order-price">Price: ${product.price.toFixed(2)}</p>
                <p className="order-quantity">Quantity: {cartItem[product.id]}</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <Link to="/" className="back-home">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
