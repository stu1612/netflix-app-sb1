// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// files
import form from "../../data/signUp.json";
import validateEmail from "../../scripts/validateEmail";
import UserInputField from "../../components/UserInputField";

export default function Landing() {
  // global state
  const [email, setEmail] = useState("");

  return (
    <section id="hero">
      <div className="hero-landing">
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
                setup={form.email}
                state={[email, setEmail]}
                validation={validateEmail}
                className="email-input"
              />
              <Link
                className={`btn-signup ${email ? "active" : "disabled"}`}
                state={{ data: email }}
                to="/signup/registration"
              >
                <span>Get started</span>
                <span style={{ marginLeft: "5px" }}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
