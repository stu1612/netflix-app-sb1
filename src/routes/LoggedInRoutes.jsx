// npm
import { Routes, Route } from "react-router-dom";
// files
import Home from "../pages/LoggedIn/Home";

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/netflix" element={<Home />} />
    </Routes>
  );
}
