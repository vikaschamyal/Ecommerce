import React, { useState, useContext, useCallback } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { FiHeart, FiEye } from 'react-icons/fi';
import { ShopContext } from '../../context/ShopContext';
import ProductQuickView from '../ProductQuickView/ProductQuickView';

const Item = React.memo(({ id, name, image, price }) => {
    const { toggleWishlist, isInWishlist, addtoccart } = useContext(ShopContext);
    const [showQuickView, setShowQuickView] = useState(false);
    const product = { id, name, image, price };

    const handleWishlistClick = useCallback((e) => {
        e.preventDefault();
        toggleWishlist(id);
    }, [id, toggleWishlist]);

    const handleQuickViewClick = useCallback((e) => {
        e.preventDefault();
        setShowQuickView(true);
    }, []);

    const handleAddToCart = useCallback((e) => {
        e.preventDefault();
        addtoccart(id);
    }, [id, addtoccart]);

    return (
        <>
            <div className="item-container">
                <div className="item-image-wrapper">
                    <Link to={`/product/${id}`}>
                        <img 
                            className="item-image" 
                            src={image} 
                            alt={name}
                            loading="lazy"
                        />
                    </Link>
                    <div className="item-overlay">
                        <button
                            className={`item-action-btn wishlist-btn ${isInWishlist(id) ? 'active' : ''}`}
                            onClick={handleWishlistClick}
                            aria-label={isInWishlist(id) ? 'Remove from wishlist' : 'Add to wishlist'}
                        >
                            <FiHeart />
                        </button>
                        <button
                            className="item-action-btn quickview-btn"
                            onClick={handleQuickViewClick}
                            aria-label="Quick view"
                        >
                            <FiEye />
                        </button>
                    </div>
                </div>

                <Link to={`/product/${id}`} className="item-name-link">
                    <p className="item-name">{name}</p>
                </Link>
                <div className="item-prices">
                    <span className="item-price-new">${price.toFixed(2)}</span>
                </div>
                <button className="buy-now-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
            <ProductQuickView
                product={product}
                isOpen={showQuickView}
                onClose={() => setShowQuickView(false)}
            />
        </>
    );
});

Item.displayName = 'Item';

export default Item;
