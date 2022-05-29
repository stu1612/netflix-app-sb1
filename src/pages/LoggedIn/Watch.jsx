// npm
import ReactPlayer from "react-player/youtube";
import { useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  const { videoId } = location.state.data;

  return (
    <div className="watch">
      <ReactPlayer
        url={videoId}
        width="100%"
        height="90vh"
        className="react-player"
        playing={true}
        controls
        onReady={() => console.log("ready")}
        onStart={() => console.log("start")}
        onPause={() => console.log("pause")}
        onEnded={() => console.log("ended")}
        onError={() => console.log("error")}
      />
    </div>
  );
}
