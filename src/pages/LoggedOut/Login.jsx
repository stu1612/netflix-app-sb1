// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import { loginUser } from "../../firebase/fireAuth";
import { ModalContext } from "../../contexts/ModalContext";
import CompleteLogin from "../../components/CompleteLogin";
import firebaseErrors from "../../data/firebaseError.json";
import AuthModalErrorMessage from "../../components/AuthModalErrorMessage";

export default function Login() {
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
    data !== admin && navigate("/netflix");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    setIsModal(<AuthModalErrorMessage message={message} />);
  }

  return (
    <CompleteLogin
      emailState={[email, setEmail]}
      passState={[password, setPassword]}
      onLogin={onLogin}
    />
  );
}
