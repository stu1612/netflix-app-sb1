// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import CompleteLogin from "../../components/CompleteLogin";
import { loginUser } from "../../firebase/fireAuth";
import firebaseErrors from "../../data/firebaseError.json";

export default function Login() {
  // global state
  const { setUID, admin } = useContext(AuthContext);
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // properties
  const navigate = useNavigate();

  // Methods
  async function onLogin(event) {
    event.preventDefault();
    const uid = await loginUser(email, password).catch(onFail);
    if (uid) onSucess(uid);
  }

  function onSucess(data) {
    setUID(data);
    navigate("/");
    // data === admin && navigate("/admin");
    // data === !admin && navigate("/");
    console.log("data -", data);
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    alert(message);
  }

  return (
    <CompleteLogin
      emailState={[email, setEmail]}
      passState={[password, setPassword]}
      onLogin={onLogin}
    />
  );
}
