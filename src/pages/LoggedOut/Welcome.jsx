// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// files
import form from "../../data/signup.json";
import Input from "../../components/Input";
import validateEmail from "../../scripts/validateEmail";

export default function Welcome() {
  // local state
  const [email, setEmail] = useState("");

  return (
    <section id="welcome" className="welcome landing-wrapper">
      <div className="welcome-text">
        <h1>Unlimited movies, series and more.</h1>
        <h2>Look where you want. Exit whenver you want.</h2>
        <p>
          Ready to watch? Enter your email address to create or reactivate an
          account.
        </p>
        <div className="form-container">
          <form>
            <Input
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