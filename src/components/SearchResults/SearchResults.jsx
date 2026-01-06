import React from "react";
import { useLocation } from "react-router-dom";
import allProducts from "../assets/all_product";
import Item from "../Items/Item";

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

    // Filter products based on the search query
    const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    const styles = {
        container: {
            padding: "2rem 1rem",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        title: {
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "#111827",
        },
        productsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
        },
        noProducts: {
            textAlign: "center",
            padding: "4rem 2rem",
            fontSize: "1.25rem",
            color: "#6b7280",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Search Results for: "{query}"</h1>
            <div style={styles.productsGrid}>
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
                    <p style={styles.noProducts}>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
