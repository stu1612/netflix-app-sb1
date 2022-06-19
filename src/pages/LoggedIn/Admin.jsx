// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// files
import { AuthContext } from "../../contexts/AuthContext";
import Loader from "../../components/Loader";
import useLoad from "../../hooks/useLoad";

export default function Admin() {
  // global state
  const { setUID } = useContext(AuthContext);
  // local state
  const [categories, setCategories] = useState([]);

  // properties
  const navigate = useNavigate();
  const path = "media/categories/content";

  // methods
  const { isLoading, error } = useLoad(path, setCategories);

  function logout() {
    setUID(null);
    navigate("/");
  }

  // components
  const mappedItems = categories.map((item) => (
    <Link to={`/admin/${item.id}`} key={item.id} className="admin-link">
      <h2>{item.title}</h2>
    </Link>
  ));

  // safeguard
  if (isLoading) return <Loader />;
  if (error) return "Error ...";

  return (
    <section id="admin">
      <div className="admin-grid">{mappedItems}</div>
      <button className="btn btn-red btn-admin" onClick={logout}>
        Logout
      </button>
    </section>
  );
}
