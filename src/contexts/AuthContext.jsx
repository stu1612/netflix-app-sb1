import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [admin, setAdmin] = useState("Sp38Hp0Rpjf0nI0R1Ok4ivgi7JP2");
  const [username, setUsername] = useState("");
  const [checked, setChecked] = useState(true);

  const [uid, setUID] = useState(() => {
    const value = localStorage.getItem("token");
    const parsedValue = JSON.parse(value);
    return parsedValue || null;
  });

  // methods
  function toggleChecked() {
    setChecked(!checked);
  }

  function logout() {
    setUID(null);
  }

  return (
    <AuthContext.Provider
      value={{
        admin,
        setAdmin,
        uid,
        setUID,
        username,
        setUsername,
        checked,
        toggleChecked,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
