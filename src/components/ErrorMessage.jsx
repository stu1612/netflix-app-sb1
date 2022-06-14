// npm
import { useContext } from "react";

// files
import { ModalContext } from "../contexts/ModalContext";

export default function AuthModalErrorMessage({ message }) {
  // global state
  const { setIsModal } = useContext(ModalContext);

  return (
    <div className="error-container">
      <p>{message}</p>
      <button className="cta-red" onClick={() => setIsModal(null)}>
        close
      </button>
    </div>
  );
}
