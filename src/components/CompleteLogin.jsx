// npm
import { Link } from "react-router-dom";

// files
import LoginForm from "./forms/LoginForm";

export default function CompleteLogin({ emailState, passState, onLogin }) {
  return (
    <section id="login">
      <div className="hero-landing">
        <div className="login-form">
          <h1>sign in</h1>
          <LoginForm
            emailState={emailState}
            passState={passState}
            onLogin={onLogin}
          />
          <div className="sign-up-notice">
            <h3>
              New to Netflix? {""}
              <span>
                <Link to="/signup/regform" state={{ data: "" }}>
                  Register Now.
                </Link>
              </span>
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
