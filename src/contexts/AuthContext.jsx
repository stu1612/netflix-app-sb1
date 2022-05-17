import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [uid, setUID] = useState(null);
  const [username, setUsername] = useState("");
  return (
    <AuthContext.Provider value={{ uid, setUID, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
}
