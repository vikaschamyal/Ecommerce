import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { allProducts, cartItem, addtoccart, removefromcart, removeItemFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartProducts = allProducts.filter(product => cartItem[product.id] > 0);
  const totalItems = Object.values(cartItem).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * cartItem[product.id],
    0
  ).toFixed(2);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (totalItems === 0) {
      alert("Your cart is empty.");
      return;
    }
    navigate("/checkout-success", { state: { cartItem, totalPrice, allProducts } });
  };

  const handleIncrease = (productId) => {
    addtoccart(productId);
  };

  const handleDecrease = (productId) => {
    removefromcart(productId);
  };

  const handleRemove = (productId) => {
    if (window.confirm("Remove this item from cart?")) {
      removeItemFromCart(productId);
    }
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-content">
        {/* Left: Cart Items */}
        <div className="cart-section">
          {cartProducts.length === 0 ? (
            <div className="empty-cart-container">
              <p className="empty-cart">Your cart is empty. Go add some products!</p>
              <button className="continue-shopping-btn" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-header">
                <p>Product</p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Action</p>
              </div>
              <hr className="cart-divider" />
              <div className="cart-items">
                {cartProducts.map((product) => (
                  <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.name} className="cart-img" />
                    <p className="cart-item-name">{product.name}</p>
                    <p className="cart-item-price">${product.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleDecrease(product.id)}
                        aria-label="Decrease quantity"
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity-value">{cartItem[product.id]}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleIncrease(product.id)}
                        aria-label="Increase quantity"
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <p className="cart-item-total">${(product.price * cartItem[product.id]).toFixed(2)}</p>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="cart-remove-btn"
                      aria-label="Remove item"
                    >
                      <RxCross1 />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: Checkout Form */}
        <div className="checkout-section">
          <h3 className="checkout-title">Checkout Summary</h3>
          <div className="checkout-summary">
            <div className="summary-row">
              <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):</span>
              <span>${totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span><strong>Total:</strong></span>
              <span><strong>${totalPrice}</strong></span>
            </div>
          </div>

          <form className="checkout-form" onSubmit={handleCheckout}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Shipping Address</label>
              <textarea id="address" rows="3" placeholder="123 Main St, City, Country" required />
            </div>
            <div className="form-group">
              <label htmlFor="payment">Payment Method</label>
              <select id="payment" required>
                <option value="">-- Select Payment Method --</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            <button type="submit" className="checkout-btn" disabled={totalItems === 0}>
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
