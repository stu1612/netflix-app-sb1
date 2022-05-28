// npm
import { useContext } from "react";
// files
import { AuthContext } from "../contexts/AuthContext";
import form from "../data/signUp.json";
import validateString from "../scripts/validateString";
import validateEmail from "../scripts/validateEmail";
import UserInputField from "./UserInputField";

export default function CompleteSignUp({ emailState, passState, onSignUp }) {
  // global state
  const { username, setUsername } = useContext(AuthContext);
  // local state
  const [confirmEmail, setConfirmEmail] = emailState;
  const [password, setPassword] = passState;

  return (
    <section id="signup">
      <div className="signup">
        <div className="signup-header">
          <span>step 2 of 2</span>
          <h1>Create a password to start your membership</h1>
        </div>
        <div className="signup-body">
          <p>Just a few steps left - then it's done!</p>
          <p>We also hate paperwork.</p>
        </div>
        <div className="signup-form">
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
              <input type="checkbox" name="" id="" />
              <span>
                Do not send me email with special offers from Netflix.
              </span>
            </div>
            <div className="btn-signup">
              <button>Next</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
