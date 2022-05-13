// npm
import { Link } from "react-router-dom";

export default function Landing() {
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
              <input type="text" />
              <Link to="/signup/registration" className="bta cta">
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
