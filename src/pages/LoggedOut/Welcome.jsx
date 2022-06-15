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
    <section id="welcome">
      <div className="introduction">
        <h1>Unlimited movies, series and more.</h1>
        <p>Look where you want. Exit whenver you want.</p>
        <p>
          Ready to watch? Enter your email address to create or reactivate an
          account.
        </p>
        <div className="form-container">
          <form className="form">
            <Input
              divClass="input-signup"
              inputClass={null}
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
