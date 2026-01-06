import React from 'react';
import './Popular.css';
import allProducts from '../assets/all_product.js';
import Item from '../Items/Item';

const Popular = () => {
    return (
        <div id="popular" className="popular-container trending-section">
            <h1>Popular Products</h1>
            <hr />
            <div className="popular-grid">
                {
                  allProducts.map((item, i) => (
                        <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
                  ))
                }
            </div>
        </div>
    );
}

export default Popular;
