// npm
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
// import ConfirmPassword from "../../components/ConfirmPassword";
import { createUser } from "../../firebase/fireAuth";
import { createDocumentWithId } from "../../firebase/fireStore";
import firebaseErrors from "../../data/firebaseError.json";
import InputField from "../../components/InputField";
import form from "../../data/signUp.json";
import validateEmail from "../../scripts/validateEmail";
import validateString from "../../scripts/validateString";

export default function SignUp() {
  // properties
  const location = useLocation();
  const email = location.state.data;

  // global state
  const { setUID } = useContext(AuthContext);
  const { setIsModal } = useContext(ModalContext);

  // local state
  const [newEmail, setNewEmail] = useState(email);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(uid);
    // navigation("/dashboard");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];

    console.error(error.code);
    setIsModal(message);
  }

  return (
    <div className="registration">
      <div className="register-header">
        <span>step 2 of 2</span>
        <h1>Create a password to start your membership</h1>
      </div>
      <div className="register-body">
        <p>Just a few steps left - then it's done!</p>
        <p>We also hate paperwork.</p>
      </div>
      <div className="register-form">
        <form onSubmit={onSignUp}>
          <InputField
            setup={form.email}
            state={[newEmail, setNewEmail]}
            validation={validateEmail}
          />
          <InputField
            setup={form.username}
            state={[username, setUsername]}
            validation={validateString}
          />
          <InputField
            setup={form.password}
            state={[password, setPassword]}
            validation={validateString}
          />
          {/* <input
            type="email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          /> */}

          <div className="email-preference">
            <input type="checkbox" name="" id="" />
            <span>Do not send me email with special offers from Netflix.</span>
          </div>
          <div className="submit-btn-container">
            <button>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
