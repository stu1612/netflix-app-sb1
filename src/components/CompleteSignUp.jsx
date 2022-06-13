// files
import SignUpForm from "./forms/SignUpForm";

export default function CompleteSignUp({ onSignUp, passState, emailState }) {
  return (
    <section id="signup">
      <div className="signup">
        <div className="signup-header">
          <p className="step-indicator">
            step <span className="bolder">2</span> of{" "}
            <span className="bolder">2</span>
          </p>
          <h1>Create a password to start your membership</h1>
        </div>
        <div className="signup-body">
          <p>Just a few steps left - then it's done!</p>
          <p>We also hate paperwork.</p>
        </div>
        <div className="signup-form">
          <SignUpForm
            passState={passState}
            emailState={emailState}
            onSignUp={onSignUp}
          />
        </div>
      </div>
    </section>
  );
}
