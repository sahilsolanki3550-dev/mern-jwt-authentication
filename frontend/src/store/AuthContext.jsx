import { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL


  const storeToken = (token) => {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    setUser(decoded.UserInfo)
    setIsLoggedIn(true);
  };



  const logout = async () => {
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      console.log(response.ok)
      if (response.ok) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUser(null);
      } else {
        console.error("Logout failed on server");
      }
    } catch (error) {
      console.error("Network error during logout:", error);
    }

  };
  

  const getNewAccessToken = async () => {

    try {
      const response = await fetch(`${API_URL}/refresh`, {
        method: "GET",
        credentials: "include"
      })
      if (!response.ok) {
        logout();
        return false;
      }
      const data = await response.json();

      storeToken(data.accessToken);


      return true;
    } catch (error) {
      logout();

      console.log(error)
      return false;
    }
  }

  const getUserDetail = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/user/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    if (response.ok) {
      const data = await response.json()
      //  console.log(data.user)
      setUser(data.user)
    }
  }

  useEffect(() => {
    if (isLoggedIn && user?.role === 'user') {
      getUserDetail();
    }
  }, [isLoggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now() - 1000) {
          setIsLoggedIn(true);
          setUser(decoded.UserInfo)
        } else {
          getNewAccessToken()
          // console.log(token)

          // logout()
        }
      } catch (error) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setLoading(false);

      }

    }
  }, []);




  return (
    <AuthContext.Provider value={{ isLoggedIn, storeToken, logout, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

