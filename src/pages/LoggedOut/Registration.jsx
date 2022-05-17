// npm
import { Link, useLocation } from "react-router-dom";

export default function Registration() {
  // properties
  const location = useLocation();
  const email = location.state.data[0];

  return (
    <section id="registration">
      <div className="registration">
        <div className="device-icons" />
        <div className="register-header">
          <p className="step-indicator">
            step <span className="bolder">1</span> of{" "}
            <span className="bolder">2</span>
          </p>
          <h1 className="registration-title">
            Complete the registration of your account
          </h1>
        </div>
        <div className="register-body">
          <p>
            Netflix is personalizes for you. Create a password to view which
            devices you want, whenver you want.
          </p>
        </div>
        <div className="submit-btn-container">
          <Link
            to="/signup/regform"
            className="btn-primary"
            state={{ data: email }}
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}
