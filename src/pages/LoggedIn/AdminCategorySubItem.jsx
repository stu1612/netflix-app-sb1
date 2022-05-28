// npm
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

// files
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import AdminCardSubItem from "../../components/admin/AdminCardSubItem";
import CreateEpisode from "../../components/admin/CreateEpisode";
import deleteItem from "../../scripts/deleteItem";
import Loader from "../../components/Loader";
import useLoad from "../../hooks/useLoad";

export default function AdminCategorySubItem() {
  // global state
  const { setIsModal } = useContext(ModalContext);
  const { episodes, setEpisodes } = useContext(AppContext);

  // properties
  const params = useParams();
  const navigate = useNavigate();
  const { subId, lastId } = useParams();

  const path = `media/categories/content/series/content/${subId}/content/${lastId}/content`;

  // methods
  const { isLoading, error } = useLoad(path, setEpisodes);

  function onDeleteItem(id) {
    deleteItem(path, id, episodes, setEpisodes);
    setIsModal(null);
  }

  // components
  const mappedItems = episodes.map((item) => (
    <AdminCardSubItem item={item} key={item.id} onDeleteItem={onDeleteItem} />
  ));

  // safeguard
  if (isLoading) return <Loader />;
  if (error) return "Error ...";

  return (
    <div className="container-1200">
      <h1>
        Create episodes for {subId} {lastId}
      </h1>
      <div className="cards-row-container">
        <div className="cards">
          <div className="card-wrapper">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="card btn"
              onClick={() =>
                setIsModal(
                  <CreateEpisode params={params} className="card btn" />
                )
              }
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
