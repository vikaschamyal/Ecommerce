import { createContext, useState } from "react";
import allProducts from "../components/assets/all_product"; // Import all products

export const ShopContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProducts.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItem, setcartItem] = useState(getDefaultCart());

    const addtoccart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removefromcart = (itemId) => {
        setcartItem((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    };

    // Function to calculate total items in cart
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
