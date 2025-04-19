import { createContext, useState, useEffect } from "react";
import allProducts from "../components/assets/all_product"; // Import all products

export const ShopContext = createContext();

// Function to create an empty cart object
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProducts.length; index++) {
        cart[allProducts[index].id] = 0; // Use product ID instead of array index
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    // ✅ Load cart from localStorage or use default cart
    const [cartItem, setcartItem] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });

    // ✅ Save cart to localStorage whenever cartItem changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);

    // ✅ Add to cart function
    const addtoccart = (itemId) => {
        setcartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    // ✅ Remove from cart function
    const removefromcart = (itemId) => {
        setcartItem((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
        }));
    };

    // ✅ Function to calculate total items in cart
    const getTotalCartCount = () => {
        return Object.values(cartItem).reduce((acc, curr) => acc + curr, 0);
    };

    return (
        <ShopContext.Provider value={{ allProducts, cartItem, addtoccart, removefromcart, getTotalCartCount }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
