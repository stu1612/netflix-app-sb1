// npm
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// files
import { ModalContext } from "../contexts/ModalContext";

export default function CloseModal() {
  // global state
  const { setIsModal } = useContext(ModalContext);

  return (
    <FontAwesomeIcon
      icon={faCircleXmark}
      className="close-icon"
      onClick={() => setIsModal(null)}
    />
  );
}
