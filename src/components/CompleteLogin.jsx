// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../contexts/AuthContext";
import form from "../data/login.json";
import validateString from "../scripts/validateString";
import UserInputField from "../components/UserInputField";

export default function CompleteLogin({ emailState, passState, onLogin }) {
  // global state
  const { checked, toggleChecked } = useContext(AuthContext);
  // local state
  const [email, setEmail] = emailState;
  const [password, setPassword] = passState;

  return (
    <section id="login">
      <div className="hero-landing">
        <div className="login-form">
          <h1>sign in</h1>
          <form onSubmit={onLogin}>
            <UserInputField
              setup={form.email}
              state={[email, setEmail]}
              classname="m-bottom-2"
              inputStyle="dark-bg"
            />
            <UserInputField
              setup={form.password}
              state={[password, setPassword]}
              validation={validateString}
              classname="m-bottom-2"
              inputStyle="dark-bg"
            />
            <div className="btn-signup">
              <button>Sign In</button>
            </div>
            <div className="remember-check">
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={toggleChecked}
                />
                <span>Remember me</span>
              </div>
              <span>
                <Link to="/LoginHelp" className="help">
                  Need help?
                </Link>
              </span>
            </div>
          </form>
          <div className="sign-up-notice">
            <h3>
              New to Netflix? <span>Register Now.</span>
            </h3>
            <p>
              This page is protected by Google reCAPTCHA to confirm that you are
              not a robot.
              <span>Learn more.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
