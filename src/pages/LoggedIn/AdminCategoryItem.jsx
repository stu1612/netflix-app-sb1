// npm
import { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faSquarePlus,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

// files
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import CreateSeason from "../../components/admin/CreateSeason";
import deleteItem from "../../scripts/deleteItem";
import Loader from "../../components/Loader";
import useLoad from "../../hooks/useLoad";

export default function AdminCategoryItem() {
  // global state
  const { setIsModal } = useContext(ModalContext);
  // local state
  const { seasons, setSeasons } = useContext(AppContext);

  // properties
  const { id, subId } = useParams();
  const navigate = useNavigate();
  const path = `media/categories/content/series/content/${subId}/content`;

  // methods
  const { isLoading, error } = useLoad(path, setSeasons);

  function onDeleteItem(id) {
    deleteItem(path, id, seasons, setSeasons);
    navigate(-1);
    setIsModal(null);
  }

  // components
  const mappedItems =
    seasons &&
    seasons.map((item) => (
      <div className="card-wrapper" key={item.id}>
        <h2>{item.season}</h2>
        <div className="btn-display">
          <button>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="fa-icon"
              onClick={() => onDeleteItem(item.id)}
            />
          </button>
          <button>
            <Link
              key={item.id}
              className="btn"
              to={`/admin/${id}/${subId}/${item.id}`}
            >
              <FontAwesomeIcon icon={faBoxOpen} className="fa-icon" />
            </Link>
          </button>
        </div>
      </div>
    ));

  const EmptyItems =
    seasons.length === 0 &&
    `There are no seasons currently created.  Before you can create the series content for ${subId} you need to create a season!  When a season is created you can then start to add the series episodes.`;

  // safeguard
  if (isLoading) return <Loader />;
  if (error) return "Error ...";

  return (
    <div className="container-960">
      <h1>Hi, here you can add the series seasons for {subId} </h1>
      <div>{EmptyItems}</div>
      <div className="cards-row-container">
        <div className="cards">
          <div className="card-wrapper">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="card btn"
              onClick={() => setIsModal(<CreateSeason subId={subId} />)}
            />
          </div>
          {mappedItems}
        </div>
      </div>
      <button className="btn-back" onClick={() => navigate(-1)}>
        go back
      </button>
    </div>
  );
}
