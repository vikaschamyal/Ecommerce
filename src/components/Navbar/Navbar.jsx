import React, { useState, useContext } from "react";
import "./Navbar.css";
import { FaShopify, FaBars, FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../../context/ShopContext"; // Import ShopContext

const Navbar = () => {
    const [menu, setMenu] = useState("mens");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
    const { getTotalCartCount } = useContext(ShopContext); // Get cart count function
    const navigate = useNavigate(); // Hook for navigation

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Navigate to search results page
        }
    };

    return (
        <nav className="navbar">
            {/* Logo and Menu Button (for mobile) */}
            <div className="nav-logo">
                <button className="menu-button" onClick={toggleMenu}>
                    <FaBars className="menu-icon" />
                </button>
                <Link to="/" className="logo-link"><FaShopify className="shop-icon" /></Link>
            </div>

            {/* Search Bar */}
            <form className="search-bar" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    <FaSearch className="search-icon" />
                </button>
            </form>

            {/* Menu */}
            <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                {["mens", "womens", "kids"].map((item) => (
                    <li key={item} onClick={() => setMenu(item)}>
                        <Link to={`/${item}`} className="nav-link">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                        {menu === item && <hr />}
                    </li>
                ))}
            </ul>

            {/* Login & Cart */}
            <div className="nav-login">
                <Link to="/login"><button className="login-btn">Login</button></Link>
                <Link to="/cart" className="cart-link">
                    <MdShoppingCart className="cart-icon" />
                    {/* Show Cart Count */}
                    {getTotalCartCount() > 0 && (
                        <span className="cart-count">{getTotalCartCount()}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;