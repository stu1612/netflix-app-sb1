// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../contexts/AuthContext";
import form from "../data/login.json";
import InputField from "./InputField";
import validateString from "../scripts/validateString";

export default function CompleteLogin({ emailState, passState, onLogin }) {
  // global state
  const { checked, toggleChecked } = useContext(AuthContext);
  // local state
  const [email, setEmail] = emailState;
  const [password, setPassword] = passState;

  return (
    <div id="login">
      <div className="hero-landing">
        <div className="login-form">
          <h2>sign in</h2>
          <form onSubmit={onLogin}>
            <InputField setup={form.email} state={[email, setEmail]} />
            <InputField
              setup={form.password}
              state={[password, setPassword]}
              validation={validateString}
            />
            <button>sign in</button>
            <input type="checkbox" checked={checked} onChange={toggleChecked} />
            <span>
              <Link to="/LoginHelp">Need help?</Link>
            </span>
          </form>
          <div className="sign-up-notice">
            <h3>
              New to Netflix? <span>Register Now.</span>
            </h3>
            <p>
              This page is protected by Google reCAPTCHA to confirm that you are
              not a robot.
              <span>Read more.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
