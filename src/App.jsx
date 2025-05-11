import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Shopcategories from './pages/Shopcategories';
import SearchResults from './components/SearchResults/SearchResults';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Shops from './pages/Shops';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// Define the banners
import kids from './components/assets/kids.jpg';
import men from './components/assets/men.jpg';
import women from './components/assets/women.jpg';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CheckoutSuccess from './components/Checkoutsuccess/CheckoutSuccess';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="/mens" element={<Shopcategories banner={men} category="mens" />} />
          <Route path="/womens" element={<Shopcategories banner={women} category="womens" />} />
          <Route path="/kids" element={<Shopcategories banner={kids} category="kids" />} />

          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>} />

          <Route path="/signup" element={<Signup />}/>

          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/shops" element={<Shopcategories />} />
        </Routes>
        <Footer/>
      </Router>
      
    </AuthProvider>
  );
}

export default App;