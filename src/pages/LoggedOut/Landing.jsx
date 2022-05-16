// npm
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";

// files
import { AuthContext } from "../../contexts/AuthContext";
import form from "../../data/email.json";
import validateString from "../../scripts/validateString";
import validateEmail from "../../scripts/validateEmail";

export default function Landing() {
  // global state
  const { isEmail, setIsEmail } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  // properties
  const navigate = useNavigate();

  // function emailIsValid(event) {
  //   event.preventDefault();
  //   isEmail && navigate("/signup/regform");
  // }

  return (
    <section id="hero">
      <div className="hero-landing">
        <div className="story-text">
          <h1>Unlimited with movies, series and more.</h1>
          <h2>Look where you want. Exit whenver you want.</h2>
          <p>
            Ready to start watching? Enter your email address to create or
            reactivate an account.
          </p>
          <div className="email-form">
            <form>
              <InputField
                setup={form.email}
                state={[email, setEmail]}
                validation={validateEmail}
              />
              <Link
                className="bta cta"
                to="/signup/registration"
                state={{ data: email }}
              >
                <span>Get started</span>
                <span>></span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
