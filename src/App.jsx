// npm
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
// files
import { AuthContext } from "./contexts/AuthContext";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import Navbar from "./components/Navbar";
import ModalContextProvider from "./contexts/ModalContext";
import Modal from "./components/Modal";
// styles
import "./styles/style.css";

export default function App() {
  // global state
  const { uid } = useContext(AuthContext);

  return (
    <div className="App">
      <ModalContextProvider>
        <Navbar />
        <BrowserRouter>
          {uid && <LoggedInRoutes />}
          {!uid && <LoggedOutRoutes />}
          <Modal />
        </BrowserRouter>
      </ModalContextProvider>
    </div>
  );
}
