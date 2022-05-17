// npm
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import { createDocumentWithId } from "../../firebase/fireStore";
import { createUser } from "../../firebase/fireAuth";
import { ModalContext } from "../../contexts/ModalContext";
import AuthModalErrorMessage from "../../components/AuthModalErrorMessage";
import CompleteSignUp from "../../components/CompleteSignUp";
import firebaseErrors from "../../data/firebaseError.json";

export default function SignUp() {
  // properties
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.data;

  // global state
  const { setUID, username } = useContext(AuthContext);
  const { setIsModal } = useContext(ModalContext);

  // local state
  const [confirmEmail, setConfirmEmail] = useState(email);
  const [password, setPassword] = useState("");

  // methods
  async function onSignUp(event) {
    event.preventDefault();
    const uid = await createUID().catch(onFail);
    let user;

    if (uid) user = await createDocument(uid).catch(onFail);
    if (user) onSuccess(uid);
  }

  async function createUID() {
    const uid = await createUser(confirmEmail, password);
    return uid;
  }

  async function createDocument(uid) {
    const user = { username: username };
    const document = await createDocumentWithId("users", uid, user);
    return document;
  }

  function onSuccess(uid) {
    setUID(uid);
    navigate("/netflix");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    setIsModal(<AuthModalErrorMessage message={message} />);
  }

  return (
    <CompleteSignUp
      emailState={[confirmEmail, setConfirmEmail]}
      passState={[password, setPassword]}
      onSignUp={onSignUp}
    />
  );
}
