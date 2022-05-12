// npm
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      Login
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
