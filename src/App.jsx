// npm
import { BrowserRouter } from "react-router-dom";
// files
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import Navbar from "./components/Navbar";
// styles
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        {/* <LoggedInRoutes /> */}
        <LoggedOutRoutes />
      </BrowserRouter>
    </div>
  );
}
