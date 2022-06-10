// npm
import { useContext } from "react";
// files
import { AuthContext } from "../../contexts/AuthContext";
import form from "../../data/signUp.json";
import UserInputField from "../UserInputField";
import validateEmail from "../../scripts/validateEmail";
import validateString from "../../scripts/validateString";

export default function SignUpForm({ emailState, passState, onSignUp }) {
  // global state
  const { username, setUsername } = useContext(AuthContext);

  // local state
  const [confirmEmail, setConfirmEmail] = emailState;
  const [password, setPassword] = passState;

  return (
    <form onSubmit={onSignUp}>
      <UserInputField
        setup={form.email}
        state={[confirmEmail, setConfirmEmail]}
        validation={validateEmail}
        classname="input-padding"
      />
      <UserInputField
        setup={form.username}
        state={[username, setUsername]}
        validation={validateString}
        classname="input-padding"
      />
      <UserInputField
        setup={form.password}
        state={[password, setPassword]}
        validation={validateString}
        classname="input-padding"
      />
      <div className="email-preference">
        <input type="checkbox" />
        <span>Do not send me email with special offers from Netflix.</span>
      </div>
      <button className="btn-signup">Next</button>
    </form>
  );
}
