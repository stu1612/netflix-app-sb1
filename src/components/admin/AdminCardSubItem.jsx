// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AdminCardSubItem({ item, onDeleteItem }) {
  return (
    <div className="card-wrapper">
      <img src={item.thumbnail} alt={item.title} className="card" />
      <div className="btn-display">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="fa-icon"
          onClick={() => onDeleteItem(item.id)}
        />
      </div>
    </div>
  );
}
