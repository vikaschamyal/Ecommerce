import React, { useContext, useState } from "react";
import "./CartItems.css"; // Import CSS
import { ShopContext } from "../../context/ShopContext";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CartItems = () => {
  const { allProducts, cartItem, removefromcart } = useContext(ShopContext);
  const navigate = useNavigate(); // Initialize navigation

  // Calculate total price
  const totalPrice = allProducts
    .reduce((acc, product) => acc + product.price * (cartItem[product.id] || 0), 0)
    .toFixed(2);

  const handleCheckout = (event) => {
    event.preventDefault(); // Prevent form submission refresh
    navigate("/checkout-success", { state: { cartItem, totalPrice, allProducts } });
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-content">
        {/* Cart Section */}
        <div className="cart-section">
          <div className="cart-header">
            <p>*</p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p></p>
          </div>
          <hr />

          <div className="cart-items">
            {allProducts.map((product) => {
              if (cartItem[product.id] > 0) {
                return (
                  <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.name} className="cart-img" />
                    <p className="cart-name">{product.name}</p>
                    <p className="cart-price">${product.price.toFixed(2)}</p>
                    <p className="cart-quantity">{cartItem[product.id]}</p>
                    <p className="cart-total">${(product.price * cartItem[product.id]).toFixed(2)}</p>
                    <button onClick={() => removefromcart(product.id)} className="cart-remove-btn">
                      <RxCross1 />
                    </button>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Checkout Section */}
        <div className="checkout-section">
          <h3>Checkout Summary</h3>
          <div className="checkout-summary">
            <p>Total Items: {Object.values(cartItem).reduce((acc, curr) => acc + curr, 0)}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
          <form className="checkout-details" onSubmit={handleCheckout}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Shipping Address</label>
              <textarea id="address" placeholder="Enter your shipping address" required />
            </div>
            <div className="form-group">
              <label htmlFor="payment">Payment Method</label>
              <select id="payment" required>
                <option value="">Select payment method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>
            <button type="submit" className="checkout-btn">
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
