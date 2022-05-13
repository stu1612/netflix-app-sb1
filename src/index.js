import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// files
import AuthContextProvider from "./contexts/AuthContext";
// fonts
import "./assets/fonts/NetflixSansBlack.ttf";
import "./assets/fonts/NetflixSansBold.ttf";
import "./assets/fonts/NetflixSansLight.ttf";
import "./assets/fonts/NetflixSansMedium.ttf";
import "./assets/fonts/NetflixSansRegular.ttf";
import "./assets/fonts/NetflixSansThin.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
