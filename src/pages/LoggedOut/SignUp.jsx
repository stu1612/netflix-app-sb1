// npm
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
// import ConfirmPassword from "../../components/ConfirmPassword";
import { createUser } from "../../firebase/fireAuth";
import { createDocumentWithId } from "../../firebase/fireStore";
// import firebaseErrors from "../../data/firebaseError.json";

export default function SignUp() {
  // properties
  const location = useLocation();
  const email = location.state.data;

  // global state
  const { setUID, isEmail, setIsEmail } = useContext(AuthContext);

  // local state
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState(email);

  //   async function onSignUp(event) {
  //     event.preventDefault();

  //     const uid = await createUID().catch(onFail);
  //     let user;

  //     if (uid) user = await createDocument(uid).catch(onFail);
  //     if (user) onSuccess(uid);
  //   }

  //   async function createUID() {
  //     const uid = await createUser(email, password);

  //     return uid;
  //   }

  //   async function createDocument(uid) {
  //     const user = { name: name };
  //     const document = await createDocumentWithId("users", uid, user);

  //     return document;
  //   }

  //   function onSuccess(uid) {
  //     setUID(uid);
  //     // navigation("/dashboard");
  //   }

  //   function onFail(error) {
  //     const message = firebaseErrors[error.code] || firebaseErrors["default"];

  //     console.error(error.code);
  //     alert(message);
  //   }

  //   TEST 2
  //   async function onSignUp(event) {
  //     event.preventDefault();

  //     const uid = await createUID();
  //     let user;

  //     if (uid) user = await createDocument(uid);
  //     if (user) onSuccess(uid);
  //   }

  //   async function createUID() {
  //     const { data, error } = await createUser(email, password);

  //     if (error) onFailure(data);
  //     else return data;
  //   }

  //   async function createDocument(uid) {
  //     const user = { name: name };
  //     const { data, error } = await createDocumentWithId("users", uid, user);

  //     if (error) onFailure(data);
  //     else return data;
  //   }

  //   function onSuccess(uid) {
  //     setUID(uid);
  //     // navigation("/dashboard");
  //   }

  //   function onFailure(errorCode) {
  //     const message = firebaseErrors[errorCode] || firebaseErrors["default"];

  //     console.error(errorCode);
  //     alert(message);
  //   }

  async function onSignUp(event) {
    event.preventDefault();

    // 1 Create UID
    const newUID = await createUser(newEmail, password);

    // 2 Create user document
    const newUser = {
      name: name,
    };
    const payload = await createDocumentWithId("users", newUID, newUser);

    if (payload.error) {
      console.log(payload.error);
    } else {
      setUID(newUID);
      console.log(newUID);
      //   navigate("/dashboard");
    }
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
          <input
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
          />

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
