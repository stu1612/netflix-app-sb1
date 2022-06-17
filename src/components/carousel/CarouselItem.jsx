// npm
import { useContext } from "react";

// files
import { ModalContext } from "../../contexts/ModalContext";
import MediaItem from "../media/MediaItem";

export default function CarouselItem({ item }) {
  // global state
  const { setIsModal } = useContext(ModalContext);
  return (
    <div
      key={item.id}
      className="slider"
      onClick={() => setIsModal(<MediaItem />)}
    >
      <img src={require(`../../assets/images/${item.img}`)} alt="fdfd" />
    </div>
  );
}
