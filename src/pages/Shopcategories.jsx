import React, { useContext } from "react";
import Item from "../components/Items/Item";
import { ShopContext } from "../context/ShopContext";

const Shopcategories = (props) => {
    const { allProducts } = useContext(ShopContext);

    if (!allProducts || allProducts.length === 0) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "400px",
                gap: "1rem",
            }}>
                <div style={{
                    width: "40px",
                    height: "40px",
                    border: "4px solid #f3f4f6",
                    borderTop: "4px solid #667eea",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }}></div>
                <p style={{ color: "#6b7280" }}>Loading products...</p>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    const categoryMap = {
        mens: "Men's Clothing",
        womens: "Women's Clothing",
        kids: "Kids' Clothing",
    };

    const selectedCategory = categoryMap[props.category];
    const filteredProducts = allProducts.filter(product => product.category === selectedCategory);

    const styles = {
        page: {
            minHeight: "calc(100vh - 200px)",
        },
        bannerContainer: {
            width: "100%",
            marginBottom: "2rem",
        },
        banner: {
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
        },
        productsGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
            padding: "2rem",
            maxWidth: "1400px",
            margin: "0 auto",
        },
        noProducts: {
            textAlign: "center",
            padding: "4rem 2rem",
            fontSize: "1.25rem",
            color: "#6b7280",
        },
    };

    return (
        <div style={styles.page}>
            {props.banner && (
                <div style={styles.bannerContainer}>
                    <img 
                        src={props.banner} 
                        alt={`${selectedCategory || 'Category'} Banner`} 
                        style={styles.banner}
                        loading="lazy"
                    />
                </div>
            )}
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
                    <p style={styles.noProducts}>No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Shopcategories;
