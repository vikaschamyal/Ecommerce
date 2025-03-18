import React, { useEffect, useState } from 'react';
import './NewCollections.css';

const NewCollections = () => {
    const [products, setProducts] = useState([]);

    // Fetch Data from FakeStore API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="collections">
            <h2 className="collections-title">Featured Collections</h2>
            <div className="collections-grid">
                {products.map((item) => (
                    <div key={item.id} className="collection-item">
                        <img src={item.image} alt={item.title} className="item-image" />
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-price">${item.price}</p>
                        <button className="buy-btn">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
