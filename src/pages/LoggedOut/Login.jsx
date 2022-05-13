// npm
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      Login
      <button onClick={() => navigate(-1)}>Go back</button>
      <div>
        <p>Did you forget your password?</p>
        <Link to="/recover-password">Recover password</Link>
      </div>
    </div>
  );
}
