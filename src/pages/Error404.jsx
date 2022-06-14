//npm
import { useNavigate } from "react-router-dom";

export default function Error404() {
  // properties
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="content">
        <h1>Oops, this page does not exist</h1>
        <button onClick={() => navigate("/")} className="cta-red">
          Let's go home
        </button>
      </div>
    </div>
  );
}
