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
      onClick={() => setIsModal(<MediaItem item={item} />)}
    >
      <img src={item.thumbnail} alt={item.title} />
    </div>
  );
}
