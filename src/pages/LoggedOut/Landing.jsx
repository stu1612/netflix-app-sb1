// npm
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Netflix</h1>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
