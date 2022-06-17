// npm
import { Link, useLocation } from "react-router-dom";
import LoggedOutNavbar from "../../components/navigation/LoggedOutNavbar";

export default function Registration() {
  // properties
  const location = useLocation();
  const email = location.state.data[0];

  return (
    <>
      <LoggedOutNavbar navBg="white-bg" />
      <section id="registration">
        <div className="container">
          <div className="device-icons" />
          <div className="content">
            <p className="indicators">
              step <span className="bold">1</span> of{" "}
              <span className="bold">2</span>
            </p>
            <h2>Complete the registration of your account</h2>
            <div className="body">
              <p>
                Netflix is personalized for you. Complete your registration to
                watch what you want, whenever you want.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link
              to="/signup/regform"
              className="btn btn-red btn-primary"
              state={{ data: email }}
            >
              Next
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
