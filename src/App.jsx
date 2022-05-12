// npm
import { BrowserRouter } from "react-router-dom";
// files
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <LoggedInRoutes /> */}
        <LoggedOutRoutes />
      </BrowserRouter>
    </div>
  );
}
