import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { FiX, FiShoppingBag, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

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

  const handleRemove = (productId) => {
    if (window.confirm("Remove this item from cart?")) {
      removeItemFromCart(productId);
    }
  };

  // Toggle drawer when cart icon is clicked (this will be called from Navbar)
  React.useEffect(() => {
    const handleCartToggle = () => setIsOpen(true);
    window.addEventListener('openCartDrawer', handleCartToggle);
    return () => window.removeEventListener('openCartDrawer', handleCartToggle);
  }, []);

  const styles = {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 9998,
      opacity: isOpen ? 1 : 0,
      visibility: isOpen ? "visible" : "hidden",
      transition: "opacity 0.3s ease, visibility 0.3s ease",
      backdropFilter: "blur(4px)",
    },
    drawer: {
      position: "fixed",
      top: 0,
      right: isOpen ? 0 : "-100%",
      width: "100%",
      maxWidth: "420px",
      height: "100vh",
      background: "#ffffff",
      boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.15)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      transition: "right 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      borderBottom: "1px solid #e5e7eb",
      background: "#ffffff",
    },
    title: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#111827",
    },
    closeBtn: {
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      color: "#374151",
      cursor: "pointer",
      padding: "0.5rem",
      borderRadius: "50%",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      flex: 1,
      overflowY: "auto",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
    },
    empty: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 1rem",
      textAlign: "center",
      flex: 1,
      color: "#9ca3af",
    },
    emptyText: {
      fontSize: "1.1rem",
      marginBottom: "2rem",
      marginTop: "1rem",
    },
    continueBtn: {
      padding: "0.75rem 2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
    items: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    item: {
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      background: "#f9fafb",
      borderRadius: "12px",
      transition: "all 0.3s ease",
    },
    itemImage: {
      width: "80px",
      height: "80px",
      objectFit: "cover",
      borderRadius: "8px",
      flexShrink: 0,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    itemDetails: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    itemName: {
      fontSize: "0.95rem",
      fontWeight: "600",
      color: "#111827",
      margin: 0,
    },
    itemPrice: {
      color: "#667eea",
      fontWeight: "600",
      fontSize: "0.9rem",
    },
    itemActions: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "0.5rem",
    },
    quantityControls: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      background: "#ffffff",
      padding: "0.25rem",
      borderRadius: "8px",
      border: "1px solid #e5e7eb",
    },
    quantityBtn: {
      background: "none",
      border: "none",
      width: "28px",
      height: "28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      color: "#374151",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    quantityValue: {
      minWidth: "24px",
      textAlign: "center",
      fontWeight: "600",
      color: "#111827",
      fontSize: "0.875rem",
    },
    removeBtn: {
      background: "none",
      border: "none",
      color: "#ef4444",
      cursor: "pointer",
      padding: "0.5rem",
      borderRadius: "6px",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      marginTop: "auto",
      padding: "1.5rem",
      borderTop: "1px solid #e5e7eb",
      background: "#ffffff",
    },
    total: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#111827",
    },
    totalPrice: {
      color: "#667eea",
      fontSize: "1.25rem",
    },
    checkoutBtn: {
      width: "100%",
      padding: "1rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    },
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          style={styles.backdrop}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div style={styles.drawer}>
        <div style={styles.header}>
          <div style={styles.title}>
            <FiShoppingBag size={24} />
            <span>Cart ({getTotalCartCount()})</span>
          </div>
          <button 
            style={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            onMouseEnter={(e) => {
              e.target.style.background = "#f3f4f6";
              e.target.style.transform = "rotate(90deg)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "none";
              e.target.style.transform = "rotate(0deg)";
            }}
          >
            <FiX />
          </button>
        </div>

        <div style={styles.content}>
          {cartProducts.length === 0 ? (
            <div style={styles.empty}>
              <FiShoppingBag size={64} style={{ opacity: 0.3 }} />
              <p style={styles.emptyText}>Your cart is empty</p>
              <button 
                style={styles.continueBtn}
                onClick={() => setIsOpen(false)}
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
              <div style={styles.items}>
                {cartProducts.map((product) => (
                  <div key={product.id} style={styles.item}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={styles.itemImage}
                      loading="lazy"
                    />
                    <div style={styles.itemDetails}>
                      <h4 style={styles.itemName}>{product.name}</h4>
                      <p style={styles.itemPrice}>${product.price.toFixed(2)}</p>
                      <div style={styles.itemActions}>
                        <div style={styles.quantityControls}>
                          <button
                            onClick={() => removefromcart(product.id)}
                            style={styles.quantityBtn}
                            aria-label="Decrease quantity"
                            onMouseEnter={(e) => {
                              e.target.style.background = "#f3f4f6";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = "none";
                            }}
                          >
                            <FiMinus />
                          </button>
                          <span style={styles.quantityValue}>{cartItem[product.id]}</span>
                          <button
                            onClick={() => addtoccart(product.id)}
                            style={styles.quantityBtn}
                            aria-label="Increase quantity"
                            onMouseEnter={(e) => {
                              e.target.style.background = "#f3f4f6";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = "none";
                            }}
                          >
                            <FiPlus />
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemove(product.id)}
                          style={styles.removeBtn}
                          aria-label="Remove item"
                          onMouseEnter={(e) => {
                            e.target.style.background = "#fee2e2";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "none";
                          }}
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.footer}>
                <div style={styles.total}>
                  <span>Subtotal:</span>
                  <span style={styles.totalPrice}>${totalPrice}</span>
                </div>
                <button 
                  style={styles.checkoutBtn}
                  onClick={handleCheckout}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .cart-drawer-content::-webkit-scrollbar {
          width: 6px;
        }
        .cart-drawer-content::-webkit-scrollbar-track {
          background: #f9fafb;
        }
        .cart-drawer-content::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .cart-drawer-content::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        @media (max-width: 640px) {
          .cart-drawer {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default CartDrawer;
