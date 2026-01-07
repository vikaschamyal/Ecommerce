import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

import Descriptionbox from '../components/Descriptionbox/Descriptionbox.jsx';

const Product = () => {
    const { allProducts } = useContext(ShopContext);
    const { productId } = useParams();
    
    const product = allProducts?.find((e) => e.id === Number(productId));

    if (!allProducts || allProducts.length === 0) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading product...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist or has been removed.</p>
                <a href="/" className="back-to-home-btn">Return to Home</a>
            </div>
        );
    }

    return (
        <div className="product-page">
            <Breadcrumb product={product} />
            <ProductDisplay product={product}/>
            <Descriptionbox/>
        </div>
    );
};

export default Product;
