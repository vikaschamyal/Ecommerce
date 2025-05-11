import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtoccart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    // You can pass size info to context if needed
    addtoccart(product.id);
  };

  return (
    <section className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <article className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>
        <p>Category: {product.category}</p>
        <p className="product-description">{product.description}</p>

        {/* Size Selection */}
        <div className="size-selection">
          <p>Select Size:</p>
          <div className="size-buttons">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </article>
    </section>
  );
};

export default ProductDisplay;
