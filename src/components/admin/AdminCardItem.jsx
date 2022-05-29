// npm
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faBoxOpen,
  faCircleCheck,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

// files
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import deleteItem from "../../scripts/deleteItem";
import UpdateTitle from "../../components/admin/UpdateTitle";

export default function AdminCardItem({ item, id }) {
  // global state
  const { setIsModal } = useContext(ModalContext);
  const { categoryType, setCategoryType } = useContext(AppContext);

  // properties
  const [categoryItem] = useState(item);
  const path = `media/categories/content/${id}/content`;

  // methods
  function onDeleteItem(id) {
    deleteItem(path, id, categoryType, setCategoryType);
    setIsModal(null);
  }

  function onUpdateItem() {
    setIsModal(<UpdateTitle item={item} path={path} />);
  }

  // components
  const ConfirmDelete = (
    <div>
      <h2>Are you sure?</h2>
      <div className="btn-display">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="fa-icon"
          onClick={() => onDeleteItem(item.id)}
        />
        <FontAwesomeIcon
          icon={faCircleStop}
          className="fa-icon"
          onClick={() => setIsModal(null)}
        />
      </div>
    </div>
  );

  return (
    <div className="card-wrapper">
      <img src={item.thumbnail} alt={item.title} className="card" />
      <div className="btn-display">
        <button onClick={() => setIsModal(ConfirmDelete)}>
          <FontAwesomeIcon icon={faTrashCan} className="fa-icon" />
        </button>
        <button onClick={() => setIsModal(onUpdateItem)}>
          <FontAwesomeIcon icon={faPenToSquare} className="fa-icon" />
        </button>
        {id === "series" && (
          <button>
            <Link
              key={item.id}
              className="btn"
              to={`/admin/${id}/${item.id}`}
              state={{ data: categoryItem }}
            >
              <FontAwesomeIcon icon={faBoxOpen} className="fa-icon" />
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}
