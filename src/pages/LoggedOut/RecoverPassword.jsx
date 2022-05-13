// npm
import { useNavigate } from "react-router-dom";

export default function RecoverPassword() {
  const navigate = useNavigate();
  return (
    <div>
      Recover Password
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
