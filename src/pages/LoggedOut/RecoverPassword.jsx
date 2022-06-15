// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// files
import { ModalContext } from "../../contexts/ModalContext";
import { recoverUser } from "../../firebase/fireAuth";
import ErrorMessage from "../../components/ErrorMessage";
import firebaseErrors from "../../data/firebaseError.json";
import form from "../../data/recoverPassword.json";
import Input from "../../components/Input";

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
    setIsModal(<ErrorMessage message={message} />);
    navigate("/login");
  }

  function onFail(error) {
    const message = firebaseErrors[error.code] || firebaseErrors["default"];
    console.error(error.code);
    setIsModal(<ErrorMessage message={message} />);
  }

  return (
    <section id="recover" className="landing-wrapper">
      <div className="container">
        <div className="content">
          <h2>Forgot Email/Password</h2>
          <p>
            We'll send you an email with instructions on how to reset your
            password.
          </p>
          <form onSubmit={onRecover}>
            <Input
              setup={form.email}
              state={[email, setEmail]}
              classname="input-padding"
            />
            <button className="btn-recover">Email Me</button>
          </form>
        </div>
      </div>
    </section>
  );
}
