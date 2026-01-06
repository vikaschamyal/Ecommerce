import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import allProducts from "../components/assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            return JSON.parse(savedCart);
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
    
    let cart = {};
    for (let i = 0; i < allProducts.length; i++) {
        cart[allProducts[i].id] = 0;
    }
    return cart;
};

const getDefaultWishlist = () => {
    try {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            return JSON.parse(savedWishlist);
        }
    } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
    }
    return [];
};

const ShopContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(getDefaultCart);
    const [wishlist, setWishlist] = useState(getDefaultWishlist);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cartItem));
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }, [cartItem]);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } catch (error) {
            console.error('Error saving wishlist to localStorage:', error);
        }
    }, [wishlist]);

    const addtoccart = useCallback((itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }, []);

    const removefromcart = useCallback((itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
    }, []);

    const removeItemFromCart = useCallback((itemId) => {
        setCartItem((prev) => {
            const newCart = { ...prev };
            delete newCart[itemId];
            return newCart;
        });
    }, []);

    const updateCartQuantity = useCallback((itemId, quantity) => {
        if (quantity <= 0) {
            removeItemFromCart(itemId);
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: quantity }));
        }
    }, [removeItemFromCart]);

    const getTotalCartCount = useCallback(() => {
        return Object.values(cartItem).reduce((acc, curr) => acc + curr, 0);
    }, [cartItem]);

    const getTotalCartPrice = useCallback(() => {
        return allProducts.reduce((total, product) => {
            const quantity = cartItem[product.id] || 0;
            return total + (product.price * quantity);
        }, 0);
    }, [cartItem]);

    // Wishlist functions
    const addToWishlist = useCallback((itemId) => {
        setWishlist((prev) => {
            if (prev.includes(itemId)) return prev;
            return [...prev, itemId];
        });
    }, []);

    const removeFromWishlist = useCallback((itemId) => {
        setWishlist((prev) => prev.filter(id => id !== itemId));
    }, []);

    const isInWishlist = useCallback((itemId) => {
        return wishlist.includes(itemId);
    }, [wishlist]);

    const toggleWishlist = useCallback((itemId) => {
        if (isInWishlist(itemId)) {
            removeFromWishlist(itemId);
        } else {
            addToWishlist(itemId);
        }
    }, [isInWishlist, addToWishlist, removeFromWishlist]);

    const value = useMemo(() => ({
        allProducts,
        cartItem,
        wishlist,
        addtoccart,
        removefromcart,
        removeItemFromCart,
        updateCartQuantity,
        getTotalCartCount,
        getTotalCartPrice,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
    }), [
        cartItem,
        wishlist,
        addtoccart,
        removefromcart,
        removeItemFromCart,
        updateCartQuantity,
        getTotalCartCount,
        getTotalCartPrice,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
    ]);

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
