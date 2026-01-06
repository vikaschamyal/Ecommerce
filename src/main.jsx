import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ShopContextProvider>
  </StrictMode>,
)
