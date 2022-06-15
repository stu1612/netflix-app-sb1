// npm
import { useContext } from "react";
// files
import { AuthContext } from "../../contexts/AuthContext";
import form from "../../data/signup.json";
import Input from "../Input";
import validateEmail from "../../scripts/validateEmail";
import validateString from "../../scripts/validateString";

export default function SignUpForm({ passState, emailState, onSignUp }) {
  // global state
  const { username, setUsername } = useContext(AuthContext);

  // local state
  const [password, setPassword] = passState;
  const [newEmail, setNewEmail] = emailState;

  return (
    <form onSubmit={onSignUp}>
      <Input
        divClass="grey-border"
        inputClass={null}
        setup={form.email}
        state={[newEmail, setNewEmail]}
        validation={validateEmail}
      />
      <Input
        divClass="grey-border"
        inputClass={null}
        setup={form.username}
        state={[username, setUsername]}
        validation={validateString}
      />
      <Input
        divClass="grey-border"
        inputClass={null}
        setup={form.password}
        state={[password, setPassword]}
        validation={validateString}
      />
      <div className="email-preference">
        <input type="checkbox" />
        <span>Do not send me email with special offers from Netflix.</span>
      </div>
      <button className="btn-signup">Next</button>
    </form>
  );
}
