import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { FiX, FiHeart, FiShoppingCart, FiZoomIn } from 'react-icons/fi';
import './ProductQuickView.css';

const ProductQuickView = ({ product, isOpen, onClose }) => {
  const { addtoccart, toggleWishlist, isInWishlist } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [imageZoomed, setImageZoomed] = useState(false);

  if (!isOpen || !product) return null;

  const images = [product.image, product.image, product.image]; // In real app, use product.images array
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addtoccart(product.id);
    onClose();
  };

  const handleImageClick = () => {
    setImageZoomed(!imageZoomed);
  };

  return (
    <>
      <div className="quickview-backdrop" onClick={onClose} />
      <div className="quickview-modal">
        <button className="quickview-close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <div className="quickview-content">
          {/* Image Section */}
          <div className="quickview-images">
            <div 
              className={`quickview-main-image ${imageZoomed ? 'zoomed' : ''}`}
              onClick={handleImageClick}
            >
              <img 
                src={images[selectedImage]} 
                alt={product.name}
                loading="lazy"
              />
              <div className="zoom-indicator">
                <FiZoomIn />
                <span>{imageZoomed ? 'Click to zoom out' : 'Click to zoom'}</span>
              </div>
            </div>
            <div className="quickview-thumbnails">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="quickview-info">
            <h2>{product.name}</h2>
            <div className="quickview-price-rating">
              <span className="quickview-price">${product.price.toFixed(2)}</span>
              <span className="quickview-rating">⭐ {product.rating}</span>
            </div>
            <p className="quickview-description">{product.description || 'Premium quality product designed for modern lifestyle.'}</p>

            {/* Size Selection */}
            <div className="quickview-sizes">
              <label>Size:</label>
              <div className="size-options">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="quickview-actions">
              <button 
                className="quickview-add-cart"
                onClick={handleAddToCart}
              >
                <FiShoppingCart />
                Add to Cart
              </button>
              <button
                className={`quickview-wishlist ${isInWishlist(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product.id)}
                aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductQuickView);

