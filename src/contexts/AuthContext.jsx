import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isEmail, setIsEmail] = useState("");
  const [uid, setUID] = useState(null);
  return (
    <AuthContext.Provider value={{ isEmail, setIsEmail, uid, setUID }}>
      {children}
    </AuthContext.Provider>
  );
}
