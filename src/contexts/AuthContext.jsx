import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isEmail, setIsEmail] = useState("");
  return (
    <AuthContext.Provider value={{ isEmail, setIsEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
