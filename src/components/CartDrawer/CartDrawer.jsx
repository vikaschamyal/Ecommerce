import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { FiX, FiShoppingBag, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import './CartDrawer.css';

const CartDrawer = () => {
  const { 
    allProducts, 
    cartItem, 
    addtoccart, 
    removefromcart, 
    removeItemFromCart,
    getTotalCartCount,
    getTotalCartPrice 
  } = useContext(ShopContext);
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const cartProducts = allProducts.filter(product => (cartItem[product.id] || 0) > 0);
  const totalPrice = getTotalCartPrice().toFixed(2);

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/cart');
  };

  // Toggle drawer when cart icon is clicked (this will be called from Navbar)
  React.useEffect(() => {
    const handleCartToggle = () => setIsOpen(true);
    window.addEventListener('openCartDrawer', handleCartToggle);
    return () => window.removeEventListener('openCartDrawer', handleCartToggle);
  }, []);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="cart-drawer-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <FiShoppingBag />
            <span>Cart ({getTotalCartCount()})</span>
          </div>
          <button 
            className="cart-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <FiX />
          </button>
        </div>

        <div className="cart-drawer-content">
          {cartProducts.length === 0 ? (
            <div className="cart-drawer-empty">
              <FiShoppingBag size={64} />
              <p>Your cart is empty</p>
              <button 
                className="continue-shopping-btn"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-drawer-items">
                {cartProducts.map((product) => (
                  <div key={product.id} className="cart-drawer-item">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="cart-drawer-item-image"
                      loading="lazy"
                    />
                    <div className="cart-drawer-item-details">
                      <h4>{product.name}</h4>
                      <p className="cart-drawer-item-price">${product.price.toFixed(2)}</p>
                      <div className="cart-drawer-item-actions">
                        <div className="quantity-controls">
                          <button
                            onClick={() => removefromcart(product.id)}
                            className="quantity-btn"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus />
                          </button>
                          <span>{cartItem[product.id]}</span>
                          <button
                            onClick={() => addtoccart(product.id)}
                            className="quantity-btn"
                            aria-label="Increase quantity"
                          >
                            <FiPlus />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItemFromCart(product.id)}
                          className="remove-item-btn"
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-drawer-footer">
                <div className="cart-drawer-total">
                  <span>Subtotal:</span>
                  <span className="cart-drawer-total-price">${totalPrice}</span>
                </div>
                <button 
                  className="cart-drawer-checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

