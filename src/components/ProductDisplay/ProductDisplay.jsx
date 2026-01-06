import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addtoccart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => setSelectedSize(size);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addtoccart(product.id);
  };

  // Styles
  const styles = {
    cardWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(238, 237, 237, 0.1)",
      padding: "50px",
      maxWidth: "800px",
      margin: "40px auto",
      transition: "transform 0.3s",
    },
    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "40%",
    },
    image: {
      width: "100%",
      maxWidth: "250px",
      height: "auto",
      borderRadius: "8px",
      objectFit: "cover",
      transition: "transform 0.3s",
    },
    details: {
      flex: 1,
      textAlign: "left",
      maxWidth: "50%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
    },
    price: {
      fontSize: "18px",
      color: "#007bff",
      fontWeight: "bold",
      marginTop: "5px",
    },
    rating: {
      fontSize: "16px",
      color: "#f4b400",
      marginTop: "5px",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      marginTop: "10px",
      lineHeight: "1.5",
    },
    sizeContainer: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    sizeButtons: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    sizeButton: (selected) => ({
      margin: "0 5px",
      padding: "8px 16px",
      backgroundColor: selected ? "#007bff" : "#eee",
      color: selected ? "#fff" : "#000",
      border: `1px solid ${selected ? "#007bff" : "#ccc"}`,
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 500,
      transition: "0.3s",
    }),
    addToCartBtn: {
      marginTop: "15px",
      padding: "12px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
  };

  return (
    <section
      style={styles.cardWrapper}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
      </div>

      <article style={styles.details}>
        <h2 style={styles.name}>{product.name}</h2>
        <p style={styles.price}>${product.price}</p>
        <p style={styles.rating}>⭐ {product.rating}</p>
        <p>Category: {product.category}</p>
        <p style={styles.description}>{product.description}</p>

        <div style={styles.sizeContainer}>
          <p>Select Size:</p>
          <div style={styles.sizeButtons}>
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                style={styles.sizeButton(selectedSize === size)}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          style={styles.addToCartBtn}
          onClick={handleAddToCart}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        >
          Add to Cart
        </button>
      </article>
    </section>
  );
};

export default ProductDisplay;
