// npm
import { AuthContext } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Admin from "../pages/LoggedIn/Admin";
import AdminCategory from "../pages/LoggedIn/AdminCategory";
import AdminCategoryItem from "../pages/LoggedIn/AdminCategoryItem";
import AdminCategorySubItem from "../pages/LoggedIn/AdminCategorySubItem";
import Error404 from "../pages/Error404";
import Home from "../pages/LoggedIn/Home";
import LoggedInNavbar from "../components/navigation/LoggedInNavbar";
// files
import Watch from "../pages/LoggedIn/Watch";

export default function LoggedInRoutes() {
  // global state
  const { uid, admin } = useContext(AuthContext);
  return (
    <div>
      {uid !== admin && <LoggedInNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch" element={<Watch />} />
        {uid === admin && <Route path="admin" element={<Admin />} />}
        {uid === admin && (
          <Route path="admin/:id" element={<AdminCategory />} />
        )}
        {uid === admin && (
          <Route path="admin/:id/:subId" element={<AdminCategoryItem />} />
        )}
        {uid === admin && (
          <Route
            path="admin/:id/:subId/:lastId"
            element={<AdminCategorySubItem />}
          />
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
