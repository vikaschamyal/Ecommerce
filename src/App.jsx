import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import CartDrawer from './components/CartDrawer/CartDrawer';
import './App.css';

// Lazy load routes for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Shops = lazy(() => import('./pages/Shops'));
const Shopcategories = lazy(() => import('./pages/Shopcategories'));
const SearchResults = lazy(() => import('./components/SearchResults/SearchResults'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const CheckoutSuccess = lazy(() => import('./components/Checkoutsuccess/CheckoutSuccess'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Account = lazy(() => import('./pages/Account'));

// Define the banners
import kids from './components/assets/kids.jpg';
import men from './components/assets/men.jpg';
import women from './components/assets/women.jpg';

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/shops" element={<Shops />} />
                <Route path="/mens" element={<Shopcategories banner={men} category="mens" />} />
                <Route path="/womens" element={<Shopcategories banner={women} category="womens" />} />
                <Route path="/kids" element={<Shopcategories banner={kids} category="kids" />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup />}/>
                <Route path="/checkout-success" element={<CheckoutSuccess />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </Suspense>
          </main>
          <CartDrawer />
          <Footer/>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;