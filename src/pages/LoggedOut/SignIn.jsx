// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import { loginUser } from "../../firebase/fireAuth";
import { ModalContext } from "../../contexts/ModalContext";
import CompleteSignIn from "../../components/CompleteSignIn";
import ErrorMessage from "../../components/ErrorMessage";
import firebaseErrors from "../../data/firebaseError.json";

export default function SignIn() {
  // global state
  const { setUID, admin } = useContext(AuthContext);
  const { setIsModal } = useContext(ModalContext);

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
    data === admin && navigate("/admin");
    data !== admin && navigate("/");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    setIsModal(<ErrorMessage message={message} />);
  }

  return (
    <CompleteSignIn
      emailState={[email, setEmail]}
      passState={[password, setPassword]}
      onLogin={onLogin}
    />
  );
}
