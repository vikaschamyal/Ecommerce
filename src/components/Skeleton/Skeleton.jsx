import React from 'react';
import './Skeleton.css';

export const ProductCardSkeleton = () => {
  return (
    <div className="skeleton-product-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-price"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="skeleton-hero">
      <div className="skeleton-hero-content">
        <div className="skeleton-line skeleton-hero-title"></div>
        <div className="skeleton-line skeleton-hero-subtitle"></div>
        <div className="skeleton-button skeleton-hero-button"></div>
      </div>
      <div className="skeleton-hero-image"></div>
    </div>
  );
};

export const CartItemSkeleton = () => {
  return (
    <div className="skeleton-cart-item">
      <div className="skeleton-cart-image"></div>
      <div className="skeleton-cart-content">
        <div className="skeleton-line skeleton-cart-title"></div>
        <div className="skeleton-line skeleton-cart-price"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

