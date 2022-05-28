// npm
import { useState } from "react";
import { Link } from "react-router-dom";
// files
import Loader from "../../components/Loader";
import useLoad from "../../hooks/useLoad";

export default function Admin() {
  // local state
  const [categories, setCategories] = useState([]);

  // properties
  const path = "media/categories/content";

  // methods
  const { isLoading, error } = useLoad(path, setCategories);

  // components
  const mappedItems = categories.map((item) => (
    <Link to={`/admin/${item.id}`} key={item.id} className="admin-link">
      {item.title}
    </Link>
  ));

  // safeguard
  if (isLoading) return <Loader />;
  if (error) return "Error ...";

  return (
    <div className="container-960 justify-center">
      <div className="admin-grid">{mappedItems}</div>
    </div>
  );
}
