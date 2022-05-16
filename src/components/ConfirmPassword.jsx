// npm
import { useContext } from "react";

// files
import { AuthContext } from "../contexts/AuthContext";

export default function ConfirmPassword() {
  // global state
  const { isEmail, setIsEmail } = useContext(AuthContext);
  return (
    <div className="registration">
      <div className="register-header">
        <span>step 2 of 2</span>
        <h1>Create a password to start your membership</h1>
      </div>
      <div className="register-body">
        <p>Just a few steps left - then it's done!</p>
        <p>We also hate paperwork.</p>
      </div>
      <div className="register-form">
        <form>
          <input
            type="text"
            value={isEmail}
            onChange={(event) => setIsEmail(event.target.value)}
          />
          <input type="password" placeholder="Password" />
          <input type="name" placeholder="name" />

          <div className="email-preference">
            <input type="checkbox" name="" id="" />
            <span>Do not send me email with special offers from Netflix.</span>
          </div>
          <div className="submit-btn-container">
            <button>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
