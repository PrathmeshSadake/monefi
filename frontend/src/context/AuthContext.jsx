/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();
const decodeJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};
export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["monefijwt"]);
  const [user, setUser] = useState(
    cookies.monefijwt ? decodeJwt(cookies.monefijwt) : null
  );

  const login = (token) => {
    setCookie("monefijwt", token, { path: "/" });
    setUser(decodeJwt(token));
  };

  const logout = () => {
    removeCookie("monefijwt");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
