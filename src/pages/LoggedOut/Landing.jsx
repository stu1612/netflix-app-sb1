// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// files
import form from "../../data/signup.json";
import UserInputField from "../../components/UserInputField";
import validateEmail from "../../scripts/validateEmail";

export default function Landing() {
  // local state
  const [email, setEmail] = useState("");

  return (
    <section id="hero" className="hero-landing">
      <div className="story-text">
        <h1>Unlimited movies, series and more.</h1>
        <h2>Look where you want. Exit whenver you want.</h2>
        <p>
          Ready to watch? Enter your email address to create or reactivate an
          account.
        </p>
        <div className="email-form">
          <form>
            <UserInputField
              classname="input-signup"
              inputStyle={null}
              setup={form.email}
              state={[email, setEmail]}
              validation={validateEmail}
            />
            <Link
              className={`button-signup ${email ? "active" : "disabled"}`}
              state={{ data: email }}
              to="/signup/registration"
            >
              <span>Get started</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
