// npm
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      Sign up
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
