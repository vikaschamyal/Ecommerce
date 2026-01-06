import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { RxCross1 } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { allProducts, cartItem, addtoccart, removefromcart, removeItemFromCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [removingItem, setRemovingItem] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const cartProducts = allProducts.filter(product => cartItem[product.id] > 0);
  const totalItems = Object.values(cartItem).reduce((sum, qty) => sum + qty, 0);
  const subtotal = cartProducts.reduce(
    (sum, product) => sum + product.price * cartItem[product.id],
    0
  );
  const discount = appliedDiscount > 0 ? (subtotal * appliedDiscount / 100) : 0;
  const totalPrice = (subtotal - discount).toFixed(2);

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
    if (cartItem[productId] > 1) {
      removefromcart(productId);
    }
  };

  const handleRemove = (productId) => {
    setRemovingItem(productId);
    setTimeout(() => {
      if (window.confirm("Remove this item from cart?")) {
        removeItemFromCart(productId);
      }
      setRemovingItem(null);
    }, 100);
  };

  const applyDiscount = () => {
    const codes = {
      "SAVE10": 10,
      "SAVE20": 20,
      "WELCOME15": 15,
    };
    if (codes[discountCode.toUpperCase()]) {
      setAppliedDiscount(codes[discountCode.toUpperCase()]);
    } else {
      alert("Invalid discount code");
    }
  };

  const styles = {
    cartPage: {
      padding: "2rem 1rem",
      maxWidth: "1400px",
      margin: "0 auto",
      minHeight: "calc(100vh - 200px)",
    },
    cartTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    cartContent: {
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      alignItems: "flex-start",
    },
    cartSection: {
      flex: "2",
      minWidth: "60%",
    },
    emptyCartContainer: {
      textAlign: "center",
      padding: "4rem 2rem",
    },
    emptyCart: {
      fontSize: "1.5rem",
      color: "#666",
      marginBottom: "2rem",
    },
    continueShoppingBtn: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "0.875rem 2rem",
      borderRadius: "8px",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    cartHeader: {
      display: "grid",
      gridTemplateColumns: "100px 2fr 120px 150px 100px 60px",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem 0",
      fontWeight: "600",
      color: "#666",
      fontSize: "0.875rem",
      borderBottom: "2px solid #e5e7eb",
    },
    cartItems: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "1rem",
    },
    cartItem: {
      display: "grid",
      gridTemplateColumns: "100px 2fr 120px 150px 100px 60px",
      alignItems: "center",
      gap: "1rem",
      padding: "1.5rem 0",
      borderBottom: "1px solid #f3f4f6",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      animation: removingItem ? "fadeOut 0.3s ease-out" : "fadeIn 0.3s ease-in",
    },
    cartImg: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    cartItemName: {
      fontWeight: "600",
      fontSize: "1.125rem",
      color: "#111827",
      lineHeight: "1.5",
    },
    cartItemPrice: {
      color: "#6b7280",
      fontSize: "1rem",
      fontWeight: "500",
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      background: "#f9fafb",
      borderRadius: "8px",
      padding: "0.5rem",
      width: "fit-content",
    },
    quantityBtn: {
      background: "white",
      border: "1px solid #e5e7eb",
      width: "32px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      cursor: "pointer",
      color: "#374151",
      transition: "all 0.2s ease",
      fontSize: "0.875rem",
    },
    quantityValue: {
      minWidth: "40px",
      textAlign: "center",
      fontWeight: "600",
      color: "#111827",
      fontSize: "1rem",
    },
    cartItemTotal: {
      fontWeight: "700",
      color: "#667eea",
      fontSize: "1.125rem",
    },
    cartRemoveBtn: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "#ef4444",
      fontSize: "1.25rem",
      padding: "0.5rem",
      borderRadius: "6px",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    checkoutSection: {
      flex: "1",
      minWidth: "350px",
      background: "white",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      position: "sticky",
      top: "100px",
      height: "fit-content",
    },
    checkoutTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
      color: "#111827",
    },
    checkoutSummary: {
      background: "#f9fafb",
      padding: "1.5rem",
      borderRadius: "12px",
      marginBottom: "1.5rem",
    },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.75rem",
      color: "#374151",
      fontSize: "0.9375rem",
    },
    summaryDivider: {
      borderTop: "1px solid #e5e7eb",
      margin: "1rem 0",
    },
    totalRow: {
      marginTop: "0.5rem",
      paddingTop: "0.75rem",
      borderTop: "2px solid #e5e7eb",
      fontSize: "1.125rem",
      fontWeight: "700",
      color: "#111827",
    },
    checkoutForm: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    formLabel: {
      fontWeight: "500",
      color: "#374151",
      fontSize: "0.875rem",
    },
    formInput: {
      width: "100%",
      padding: "0.875rem",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      fontSize: "1rem",
      transition: "all 0.2s ease",
      fontFamily: "inherit",
    },
    checkoutBtn: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "1rem",
      width: "100%",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      marginTop: "0.5rem",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    discountSection: {
      marginBottom: "1rem",
      padding: "1rem",
      background: "#fef3c7",
      borderRadius: "8px",
      border: "1px solid #fcd34d",
    },
    discountInput: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "0.5rem",
    },
    discountCodeInput: {
      flex: "1",
      padding: "0.75rem",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      fontSize: "0.875rem",
    },
    discountApplyBtn: {
      padding: "0.75rem 1rem",
      background: "#111827",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "0.875rem",
    },
  };

  return (
    <div style={styles.cartPage}>
      <h2 style={styles.cartTitle}>Your Shopping Cart</h2>

      <div style={styles.cartContent}>
        {/* Left: Cart Items */}
        <div style={styles.cartSection}>
          {cartProducts.length === 0 ? (
            <div style={styles.emptyCartContainer}>
              <p style={styles.emptyCart}>Your cart is empty. Go add some products!</p>
              <button 
                style={styles.continueShoppingBtn}
                onClick={() => navigate("/")}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div style={styles.cartHeader}>
                <p>Image</p>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p></p>
              </div>
              <div style={styles.cartItems}>
                {cartProducts.map((product) => (
                  <div 
                    key={product.id} 
                    style={{
                      ...styles.cartItem,
                      opacity: removingItem === product.id ? 0.5 : 1,
                    }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={styles.cartImg}
                      loading="lazy"
                    />
                    <p style={styles.cartItemName}>{product.name}</p>
                    <p style={styles.cartItemPrice}>${product.price.toFixed(2)}</p>
                    <div style={styles.quantityControls}>
                      <button 
                        style={styles.quantityBtn}
                        onClick={() => handleDecrease(product.id)}
                        aria-label="Decrease quantity"
                        onMouseEnter={(e) => {
                          e.target.style.background = "#667eea";
                          e.target.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "#374151";
                        }}
                      >
                        <FaMinus />
                      </button>
                      <span style={styles.quantityValue}>{cartItem[product.id]}</span>
                      <button 
                        style={styles.quantityBtn}
                        onClick={() => handleIncrease(product.id)}
                        aria-label="Increase quantity"
                        onMouseEnter={(e) => {
                          e.target.style.background = "#667eea";
                          e.target.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "white";
                          e.target.style.color = "#374151";
                        }}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <p style={styles.cartItemTotal}>${(product.price * cartItem[product.id]).toFixed(2)}</p>
                    <button
                      onClick={() => handleRemove(product.id)}
                      style={styles.cartRemoveBtn}
                      aria-label="Remove item"
                      onMouseEnter={(e) => {
                        e.target.style.background = "#fee2e2";
                        e.target.style.transform = "rotate(90deg)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.transform = "rotate(0deg)";
                      }}
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
        <div style={styles.checkoutSection}>
          <h3 style={styles.checkoutTitle}>Checkout Summary</h3>
          <div style={styles.checkoutSummary}>
            <div style={styles.summaryRow}>
              <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}):</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {appliedDiscount > 0 && (
              <div style={styles.summaryRow}>
                <span>Discount ({appliedDiscount}%):</span>
                <span style={{ color: "#10b981" }}>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div style={styles.summaryRow}>
              <span>Shipping:</span>
              <span style={{ color: "#10b981", fontWeight: "600" }}>Free</span>
            </div>
            <div style={styles.summaryDivider}></div>
            <div style={styles.totalRow}>
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Discount Code Section */}
          <div style={styles.discountSection}>
            <p style={{ fontSize: "0.875rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              Have a discount code?
            </p>
            <div style={styles.discountInput}>
              <input
                type="text"
                placeholder="Enter code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                style={styles.discountCodeInput}
              />
              <button
                type="button"
                onClick={applyDiscount}
                style={styles.discountApplyBtn}
              >
                Apply
              </button>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.5rem" }}>
              Try: SAVE10, SAVE20, WELCOME15
            </p>
          </div>

          <form style={styles.checkoutForm} onSubmit={handleCheckout}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.formLabel}>Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                required 
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.formLabel}>Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@example.com" 
                required 
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="address" style={styles.formLabel}>Shipping Address</label>
              <textarea 
                id="address" 
                rows="3" 
                placeholder="123 Main St, City, Country" 
                required 
                style={{...styles.formInput, resize: "vertical", minHeight: "80px"}}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="payment" style={styles.formLabel}>Payment Method</label>
              <select 
                id="payment" 
                required 
                style={styles.formInput}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.boxShadow = "none";
                }}
              >
                <option value="">-- Select Payment Method --</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.checkoutBtn,
                opacity: totalItems === 0 ? 0.6 : 1,
                cursor: totalItems === 0 ? "not-allowed" : "pointer",
              }}
              disabled={totalItems === 0}
              onMouseEnter={(e) => {
                if (totalItems > 0) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
              }}
            >
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        @media (max-width: 968px) {
          .cart-content {
            flex-direction: column;
          }
          .checkout-section {
            position: static;
            width: 100%;
          }
          .cart-header {
            display: none;
          }
          .cart-item {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            border: 1px solid #f3f4f6;
            border-radius: 12px;
            margin-bottom: 1rem;
          }
        }
        @media (max-width: 768px) {
          .cart-page {
            padding: 1rem;
          }
          .cart-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CartItems;

