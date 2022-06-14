// npm
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import { createDocumentWithId } from "../../firebase/fireStore";
import { createUser } from "../../firebase/fireAuth";
import { ModalContext } from "../../contexts/ModalContext";
import ErrorMessage from "../../components/ErrorMessage";
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
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState(email);

  // methods
  async function onSignUp(event) {
    event.preventDefault();
    const uid = await createUID().catch(onFail);
    let user;

    if (uid) user = await createDocument(uid).catch(onFail);
    if (user) onSuccess(uid);
  }

  async function createUID() {
    const uid = await createUser(newEmail, password);
    return uid;
  }

  async function createDocument(uid) {
    const user = { username: username };
    const document = await createDocumentWithId("users", uid, user);
    return document;
  }

  function onSuccess(uid) {
    setUID(uid);
    navigate("/");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    setIsModal(<ErrorMessage message={message} />);
  }

  return (
    <CompleteSignUp
      passState={[password, setPassword]}
      emailState={[newEmail, setNewEmail]}
      onSignUp={onSignUp}
    />
  );
}
