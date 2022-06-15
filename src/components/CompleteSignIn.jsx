// npm
import { Link } from "react-router-dom";

// files
import SignInForm from "./forms/SignInForm";

export default function CompleteSignIn({ emailState, passState, onLogin }) {
  return (
    <section id="login" className="landing-wrapper">
      <div className="container">
        <h1>sign in</h1>
        <SignInForm
          emailState={emailState}
          passState={passState}
          onLogin={onLogin}
        />
        <div className="signup">
          <h3>
            New to Netflix? {""}
            <span className="register">
              <Link to="/">Register Now.</Link>
            </span>
          </h3>
          <p>
            This page is protected by Google reCAPTCHA to confirm that you are
            not a robot.
            <span className="learn">Learn more.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
