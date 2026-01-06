import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwtToken") || "");

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:5001/api/auth/profile", {
        headers: { Authorization: token },
      })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
      setToken(res.data.token);
      localStorage.setItem("jwtToken", res.data.token);
      setUser(res.data.user);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:5001/api/auth/signup", { name, email, password });
      setToken(res.data.token);
      localStorage.setItem("jwtToken", res.data.token);
      setUser(res.data.user);
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("jwtToken");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthContext;