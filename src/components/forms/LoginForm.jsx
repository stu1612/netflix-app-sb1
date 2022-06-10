// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import UserInputField from "../UserInputField";
import form from "../../data/login.json";
import validateString from "../../scripts/validateString";

export default function LoginForm({ onLogin, emailState, passState }) {
  // global state
  const { checked, toggleChecked } = useContext(AuthContext);
  // local state
  const [email, setEmail] = emailState;
  const [password, setPassword] = passState;

  return (
    <form onSubmit={onLogin}>
      <UserInputField
        setup={form.email}
        state={[email, setEmail]}
        classname="input-login"
        inputStyle="dark-bg"
      />
      <UserInputField
        setup={form.password}
        state={[password, setPassword]}
        validation={validateString}
        classname="input-login"
        inputStyle="dark-bg"
      />
      <button className="btn-signup">Sign In</button>
      <div className="remember-check">
        <div className="checkbox">
          <input type="checkbox" checked={checked} onChange={toggleChecked} />
          <span>Remember me</span>
        </div>
        <span>
          <Link to="/LoginHelp" className="help">
            Need help?
          </Link>
        </span>
      </div>
    </form>
  );
}
