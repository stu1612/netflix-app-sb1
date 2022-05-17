import { useState, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // local state
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

  function onSignOut() {
    setUID(null);
    Navigate("/");
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
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
