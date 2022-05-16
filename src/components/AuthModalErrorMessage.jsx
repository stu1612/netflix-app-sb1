// npm
import { useContext } from "react";

// files
import { ModalContext } from "../contexts/ModalContext";

export default function AuthModalErrorMessage({ message }) {
  // global state
  const { setIsModal } = useContext(ModalContext);
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setIsModal(null)}>close</button>
    </div>
  );
}
