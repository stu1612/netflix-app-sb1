// files
import SignUpForm from "./forms/SignUpForm";

export default function CompleteSignUp({ onSignUp, passState, emailState }) {
  return (
    <section id="signup">
      <div className="container">
        <div className="content">
          <p className="indicators">
            step <span className="bold">2</span> of{" "}
            <span className="bold">2</span>
          </p>
          <h1>Create a password to start your membership</h1>
        </div>
        <div className="body">
          <p>Just a few steps left - then it's done!</p>
          <p>We also hate paperwork.</p>
        </div>
        <div className="form">
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
