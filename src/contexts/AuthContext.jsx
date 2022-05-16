import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [uid, setUID] = useState(null);
  return (
    <AuthContext.Provider value={{ uid, setUID }}>
      {children}
    </AuthContext.Provider>
  );
}
