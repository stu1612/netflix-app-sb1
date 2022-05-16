// npm
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";

// files
import form from "../../data/signUp.json";
import validateString from "../../scripts/validateString";
import validateEmail from "../../scripts/validateEmail";

export default function Landing() {
  // global state
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // function emailIsValid() {
  //   email && navigate("/signup/registration");
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
              {email ? (
                <Link
                  className="bta cta"
                  state={{ data: email }}
                  to="/signup/registration"
                >
                  <span>Get started</span>
                  <span>></span>
                </Link>
              ) : (
                <Link className="bta cta disbaled" to="/">
                  <span>Get started</span>
                  <span>></span>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
