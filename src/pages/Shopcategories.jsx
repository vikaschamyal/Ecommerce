import React, { useContext } from "react";
import Item from "../components/Items/Item";
import "./Css/Shopcategories.css";
import { ShopContext } from "../context/ShopContext";

const Shopcategories = (props) => {
    const { allProducts } = useContext(ShopContext);

    // Debugging
    console.log("All Products:", allProducts);
    console.log("Category Prop:", props.category);

    // Ensure `allProducts` exists before filtering
    if (!allProducts || allProducts.length === 0) {
        return <p>Loading products...</p>;
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

    // Debugging
    console.log("Selected Category:", selectedCategory);
    console.log("Filtered Products:", filteredProducts);

    return (
        <>
            <div className="category-container">
                <img src={props.banner} alt="Category Banner" className="category-banner" />
            </div>
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
                    <p>No products available in this category.</p>
                )}
            </div>
        </>
    );
};

export default Shopcategories;