import React, { useContext } from "react";
import "./ProductDisplay.css"; // Import the CSS file
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;


  const {addtoccart } = useContext(ShopContext);

  return (
    <section className="product-card">
      {/* Right Side: Product Image */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* Left Side: Product Details */}
      <article className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>
        <p>Category : {product.category}</p>
        <p className="product-description">{product.description}</p>
        
        {/* Size Selection */}
        <div className="size-selection">
          <p>Select Size:</p>
          <div className="size-buttons">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button onClick={() => {addtoccart(product.id)}} className="add-to-cart-btn">
          Add to Cart
        </button>
      </article>
    </section>
  );
};

export default ProductDisplay;
