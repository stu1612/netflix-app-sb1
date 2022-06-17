// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../../contexts/AuthContext";
import form from "../../data/login.json";
import Input from "../Input";
import validateString from "../../scripts/validateString";

export default function LoginForm({ onLogin, emailState, passState }) {
  // global state
  const { checked, toggleChecked } = useContext(AuthContext);
  // local state
  const [email, setEmail] = emailState;
  const [password, setPassword] = passState;

  return (
    <form onSubmit={onLogin}>
      <Input
        setup={form.email}
        state={[email, setEmail]}
        divClass="input-login"
        inputClass="dark-background"
      />
      <Input
        setup={form.password}
        state={[password, setPassword]}
        validation={validateString}
        divClass="input-login"
        inputClass="dark-background"
      />
      <button className="btn btn-red btn-signin">Sign In</button>
      <div className="remember-check">
        <div className="checkbox">
          <input type="checkbox" checked={checked} onChange={toggleChecked} />
          <span>Remember me</span>
        </div>
        <span>
          <Link to="/login-help" className="help">
            Need help?
          </Link>
        </span>
      </div>
    </form>
  );
}
