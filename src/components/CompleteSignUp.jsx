// npm
import { useContext } from "react";
// files
import { AuthContext } from "../contexts/AuthContext";
import form from "../data/signUp.json";
import InputField from "../components/InputField";
import validateString from "../scripts/validateString";

export default function CompleteSignUp({ emailState, passState, onSignUp }) {
  // global state
  const { username, setUsername } = useContext(AuthContext);
  // local state
  const [confirmEmail, setConfirmEmail] = emailState;
  const [password, setPassword] = passState;

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
            state={[confirmEmail, setConfirmEmail]}
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
