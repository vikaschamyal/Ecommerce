import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { FaShopify } from "react-icons/fa";
import { MdShoppingBag, MdAccountCircle, MdWallet } from "react-icons/md";
import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import AuthContext from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const { getTotalCartCount } = useContext(ShopContext);
    const { user, logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
            setSearchQuery("");
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/");
        setIsMenuOpen(false);
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        window.dispatchEvent(new Event('openCartDrawer'));
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <FaShopify className="logo-icon" />
                    <span className="logo-text">SHOPIFY</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    <Link 
                        to="/shops" 
                        className={`nav-link ${isActive('/shops') || location.pathname.startsWith('/mens') || location.pathname.startsWith('/womens') || location.pathname.startsWith('/kids') ? 'active' : ''}`}
                    >
                        <MdShoppingBag />
                        <span>Shopping</span>
                    </Link>
                    <Link 
                        to="/wallet" 
                        className={`nav-link ${isActive('/wallet') ? 'active' : ''}`}
                    >
                        <MdWallet />
                        <span>Wallet</span>
                    </Link>
                    <Link 
                        to="/account" 
                        className={`nav-link ${isActive('/account') ? 'active' : ''}`}
                    >
                        <MdAccountCircle />
                        <span>{user ? user.name?.split(' ')[0] || 'Account' : 'Account'}</span>
                    </Link>
                </div>

                {/* Search Bar */}
                <form className="navbar-search" onSubmit={handleSearch}>
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </form>

                {/* Right Actions */}
                <div className="navbar-actions">
                    <button 
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <FiMoon /> : <FiSun />}
                    </button>
                    
                    <button 
                        className="cart-icon-btn"
                        onClick={handleCartClick}
                        aria-label="Open cart"
                    >
                        <MdShoppingBag />
                        {getTotalCartCount() > 0 && (
                            <span className="cart-badge">{getTotalCartCount()}</span>
                        )}
                    </button>

                    <button 
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/shops" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    <MdShoppingBag /> Shopping
                </Link>
                <Link to="/wallet" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    <MdWallet /> Wallet
                </Link>
                <Link to="/account" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                    <MdAccountCircle /> Account
                </Link>
                {user && (
                    <button className="mobile-logout" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
