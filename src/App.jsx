// npm
import { BrowserRouter } from "react-router-dom";
// files
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import Navbar from "./components/Navbar";
import ModalContextProvider from "./contexts/ModalContext";
import Modal from "./components/Modal";
// styles
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <Navbar />
        <BrowserRouter>
          {/* <LoggedInRoutes /> */}
          <LoggedOutRoutes />
          <Modal />
        </BrowserRouter>
      </ModalContextProvider>
    </div>
  );
}
