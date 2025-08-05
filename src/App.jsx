import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Shops from './pages/Shops';
import Shopcategories from './pages/Shopcategories';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResults from './components/SearchResults/SearchResults';
import CheckoutSuccess from './components/Checkoutsuccess/CheckoutSuccess';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Banners
import kids from './components/assets/kids.jpg';
import men from './components/assets/men.jpg';
import women from './components/assets/women.jpg';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Shops />} />

          {/* Categories */}
          <Route path="/mens" element={<Shopcategories banner={men} category="mens" />} />
          <Route path="/womens" element={<Shopcategories banner={women} category="womens" />} />
          <Route path="/kids" element={<Shopcategories banner={kids} category="kids" />} />

          {/* Product Details */}
          <Route path="/product/:productId" element={<Product />} />

          {/* Search */}
          <Route path="/search" element={<SearchResults />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Checkout */}
          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          {/* Optional: General Shopcategories fallback */}
          {/* <Route path="/shops" element={<Shopcategories />} /> */}
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
