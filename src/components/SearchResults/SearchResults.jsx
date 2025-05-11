import React from "react";
import { useLocation } from "react-router-dom";
import allProducts from "../assets/all_product"; // Import your product data
import Item from "../Items/Item"; // Reuse the Item component
import "../../pages/Css/Shopcategories.css" // Reuse the same CSS

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

    // Filter products based on the search query
    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="shop-category">
            <h1>Search Results for: "{query}"</h1>
            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;