import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { allProducts, cartItem, removefromcart } = useContext(ShopContext);
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

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-content">
        {/* Left: Cart Items */}
        <div className="cart-section">
          {cartProducts.length === 0 ? (
            <p className="empty-cart">Your cart is empty. Go add some products!</p>
          ) : (
            <>
              <div className="cart-header">
                <p>Image</p>
                <p>Name</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Action</p>
              </div>
              <hr />
              <div className="cart-items">
                {cartProducts.map((product) => (
                  <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.name} className="cart-img" />
                    <p>{product.name}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <p>{cartItem[product.id]}</p>
                    <p>${(product.price * cartItem[product.id]).toFixed(2)}</p>
                    <button
                      onClick={() => removefromcart(product.id)}
                      className="cart-remove-btn"
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
          <h3>Checkout Summary</h3>
          <div className="checkout-summary">
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Price:</strong> ${totalPrice}</p>
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
              <textarea id="address" placeholder="123 Main St, City, Country" required />
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
