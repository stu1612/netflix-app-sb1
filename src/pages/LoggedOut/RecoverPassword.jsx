// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// files
import { ModalContext } from "../../contexts/ModalContext";
import { recoverUser } from "../../firebase/fireAuth";
import AuthModalErrorMessage from "../../components/AuthModalErrorMessage";
import firebaseErrors from "../../data/firebaseError.json";
import form from "../../data/recoverPassword.json";
import UserInputField from "../../components/UserInputField";

export default function RecoverPassword() {
  // globalstate
  const { setIsModal } = useContext(ModalContext);

  // local state
  const [email, setEmail] = useState("");

  // properties
  const navigate = useNavigate();

  // method
  async function onRecover(event) {
    event.preventDefault();
    const result = await recoverUser(email).catch(onFail);
    if (result) onSuccess(email);
  }

  function onSuccess(email) {
    const message = `We sent an email to ${email}. Check you spam folder as well.`;
    setIsModal(<AuthModalErrorMessage message={message} />);
    navigate("/login");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    setIsModal(<AuthModalErrorMessage message={message} />);
  }

  return (
    <div className="landing">
      <div className="recover-form">
        <div className="recover-content">
          <h2>Forgot Email/Password</h2>
          <p>
            We'll send you an email with instructions on how to reset your
            password.
          </p>
          <form onSubmit={onRecover}>
            <UserInputField
              setup={form.email}
              state={[email, setEmail]}
              classname="input-padding"
            />

            <button className="btn-recover">Email Me</button>
          </form>
        </div>
      </div>
    </div>
  );
}
