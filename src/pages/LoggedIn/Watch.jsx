// npm
import ReactPlayer from "react-player/youtube";

export default function Watch() {
  return (
    <div className="watch">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=FzWG8jiw4XM"
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
