// npm
import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// files
import { AuthContext } from "./contexts/AuthContext";
import AppContextProvider from "./contexts/AppContext";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import Modal from "./components/Modal";
import ModalContextProvider from "./contexts/ModalContext";
import FileContextProvider from "./contexts/FileContext";
// styles
import './styles/style.scss';
// import "./styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  // global state
  const { checked, uid } = useContext(AuthContext);

  useEffect(() => {
    checked && localStorage.setItem("token", JSON.stringify(uid));
  }, [checked, uid]);

  return (
    <div className="App">
      <ModalContextProvider>
        <AppContextProvider>
          <FileContextProvider>
            <BrowserRouter>
              {uid && <LoggedInRoutes />}
              {!uid && <LoggedOutRoutes />}
            </BrowserRouter>
            <Modal />
          </FileContextProvider>
        </AppContextProvider>
      </ModalContextProvider>
    </div>
  );
}
