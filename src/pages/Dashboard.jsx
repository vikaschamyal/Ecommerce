import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiZap, FiTrendingUp } from 'react-icons/fi';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductGridSkeleton, HeroSkeleton } from '../components/Skeleton/Skeleton';
import './Dashboard.css';

const Dashboard = () => {
    const { allProducts } = useContext(ShopContext);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        // Simulate initial load with skeleton
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Get featured products
    const featuredProducts = allProducts.slice(0, 10);
    const trendingProducts = allProducts.filter(p => p.rating > 4.5).slice(0, 10);
    const newArrivals = allProducts.slice(-10).reverse();
    const discountedProducts = allProducts.filter(p => p.discount > 15).slice(0, 10);

    const categories = [
        { id: 'all', name: 'All', products: featuredProducts },
        { id: 'trending', name: 'Trending', products: trendingProducts },
        { id: 'new', name: 'New Arrivals', products: newArrivals },
        { id: 'discount', name: 'Discounts', products: discountedProducts },
    ];

    if (loading) {
        return (
            <div className="dashboard">
                <HeroSkeleton />
                <ProductGridSkeleton count={8} />
            </div>
        );
    }

    return (
        <div className="dashboard">
            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="trending-badge">
                            <FiTrendingUp />
                            <span>Trending Deals</span>
                        </div>
                        <h1 className="hero-title">
                            Shop Latest <br />
                            <span className="gradient-text">Trending Styles</span>
                        </h1>
                        <p className="hero-subtitle">
                            Discover premium fashion with exclusive discounts up to 40% off
                        </p>
                        <div className="hero-cta">
                            <Link to="/shops" className="cta-primary">
                                Shop Now
                                <FiArrowRight />
                            </Link>
                            <Link to="/wallet" className="cta-secondary">
                                <FiZap />
                                Free Wallet Credit
                            </Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img 
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" 
                            alt="Fashion"
                            loading="eager"
                        />
                        <div className="hero-overlay"></div>
                    </div>
                </div>
            </section>

            {/* Category Carousels */}
            {categories.map((category) => (
                <section key={category.id} className="category-section">
                    <div className="section-header">
                        <h2 className="section-title">{category.name}</h2>
                        <Link to="/shops" className="view-all-link">
                            View All <FiArrowRight />
                        </Link>
                    </div>
                    <div className="horizontal-carousel">
                        <div className="carousel-container">
                            {category.products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Wallet Highlight */}
            <section className="wallet-banner">
                <div className="wallet-content">
                    <div className="wallet-icon">
                        <FiZap />
                    </div>
                    <div className="wallet-text">
                        <h3>Get Free Wallet Credit</h3>
                        <p>Sign up now and get ₹500 free credit in your wallet!</p>
                    </div>
                    <Link to="/wallet" className="wallet-cta">
                        Claim Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;

