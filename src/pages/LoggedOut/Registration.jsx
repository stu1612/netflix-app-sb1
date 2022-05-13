// npm
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <section id="registration">
      <div className="registration">
        <div className="register-icons"></div>
        <div className="register-header">
          <span>step 1 of 2</span>
          <h1>Complete the registration of your account</h1>
        </div>
        <div className="register-body">
          <p>
            Netflix is personalizes for you. Create a password to view which
            devices you want, whenver you want.
          </p>
        </div>
        <div className="submit-btn-container">
          <Link to="/signup/regform">Next</Link>
        </div>
      </div>
    </section>
  );
}
