import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { toggleWishlist, isInWishlist, addtoccart } = useContext(ShopContext);
    const discount = product.discount || Math.floor(Math.random() * 30) + 20;

    const handleQuickAdd = (e) => {
        e.preventDefault();
        addtoccart(product.id);
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        toggleWishlist(product.id);
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-image-wrapper">
                <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    className="product-image"
                />
                {discount > 0 && (
                    <span className="discount-badge">-{discount}%</span>
                )}
                <div className="product-actions">
                    <button
                        className={`action-btn wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                        onClick={handleWishlist}
                        aria-label="Add to wishlist"
                    >
                        <FiHeart />
                    </button>
                    <button
                        className="action-btn cart-btn"
                        onClick={handleQuickAdd}
                        aria-label="Add to cart"
                    >
                        <FiShoppingCart />
                    </button>
                </div>
            </Link>

            <div className="product-info">
                <Link to={`/product/${product.id}`} className="product-name">
                    {product.name}
                </Link>
                <div className="product-price-row">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    {discount > 0 && (
                        <span className="original-price">
                            ${(product.price / (1 - discount / 100)).toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);

