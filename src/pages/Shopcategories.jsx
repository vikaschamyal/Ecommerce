import React, { useContext } from "react";
import Item from "../components/Items/Item";
import "./Css/Shopcategories.css";
import { ShopContext } from "../context/ShopContext";

const Shopcategories = (props) => {
    const { allProducts } = useContext(ShopContext);

    // Ensure `allProducts` exists before filtering
    if (!allProducts || allProducts.length === 0) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading products...</p>
            </div>
        );
    }

    // Map categories correctly
    const categoryMap = {
        mens: "Men's Clothing",
        womens: "Women's Clothing",
        kids: "Kids' Clothing",
    };

    const selectedCategory = categoryMap[props.category];

    // Filter products safely
    const filteredProducts = allProducts.filter(product => product.category === selectedCategory);

    return (
        <div className="shop-category-page">
            {props.banner && (
                <div className="category-container">
                    <img src={props.banner} alt={`${selectedCategory || 'Category'} Banner`} className="category-banner" />
                </div>
            )}
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
                    <p className="no-products">No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Shopcategories;