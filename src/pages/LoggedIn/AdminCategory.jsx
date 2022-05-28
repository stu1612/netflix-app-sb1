// npm
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

// files
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import AdminCardItem from "../../components/admin/AdminCardItem";
import CreateTitle from "../../components/admin/CreateTitle";
import Loader from "../../components/Loader";
import useLoad from "../../hooks/useLoad";

export default function AdminCategory() {
  // global state
  const { categoryType, setCategoryType } = useContext(AppContext);
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { id } = useParams();
  const navigate = useNavigate();
  const path = `media/categories/content/${id}/content`;

  // methods
  const { isLoading, error } = useLoad(path, setCategoryType);

  function onCreateItem() {
    setIsModal(<CreateTitle id={id} />);
  }

  // components
  const mappedItems = categoryType.map((item) => (
    <AdminCardItem item={item} id={id} key={item.id} />
  ));

  // safeguard
  if (isLoading) return <Loader />;
  if (error) return "Error ...";

  return (
    <div className="container-1200">
      <h1>Welcome to your {id} admin section</h1>
      <div className="cards-row-container">
        <div className="cards">
          <div className="card-wrapper">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="card btn"
              onClick={onCreateItem}
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
