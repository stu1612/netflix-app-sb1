// npm
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      className="loader-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RotatingLines width="100" visible={true} strokeColor="#ea0e0e" />
    </div>
  );
}
