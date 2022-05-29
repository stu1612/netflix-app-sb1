// npm
import { useContext, useState } from "react";
// Project files
import InputField from "../InputField";
import InputFile from "../InputFile";
import form from "../../data/adminTitle.json";
import { updateDocument } from "../../firebase/fireStore";
import { AppContext } from "../../contexts/AppContext";
import { ModalContext } from "../../contexts/ModalContext";
import resizedImage from "../../scripts/resizedImage";
import { createFile } from "../../firebase/cloudStorage";

export default function UpdateTitle({ item, path }) {
  // Global state
  const { categoryType, setCategoryType } = useContext(AppContext);
  const { isModal, setIsModal } = useContext(ModalContext);

  // local state
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.text);
  const [search, setSearch] = useState(item.search);
  const [genre, setGenre] = useState(item.genre);
  const [age, setAge] = useState(item.age);
  const [cast, setCast] = useState(item.cast);
  const [year, setYear] = useState(item.year);
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [videoId, setVideoId] = useState(item.videoId);
  const [thumbnailFile, setThumbnailFile] = useState(item.thumbnailFile);
  const [imageFile, setImageFile] = useState(item.imageFile);

  // properties
  const payload = {
    id: item.id,
    title: title,
    text: text,
    search: search,
    genre: genre,
    age: age,
    cast: cast,
    year: year,
    isLiked: isLiked,
    videoId: videoId,
    thumbnail: "",
    image: "",
  };

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const thumbnailFilePath = `assets/thumbnail-${title}.png`;
    const updatedThumbFile = await createFile(thumbnailFilePath, thumbnailFile);
    const imageFilePath = `assets/image-${title}.png`;
    const updatedImageFile = await createFile(imageFilePath, imageFile);
    payload.thumbnail = updatedThumbFile;
    payload.image = updatedImageFile;

    const editedItem = payload;

    const isUpdated = updateDocument(path, editedItem).catch(onFail);

    if (isUpdated) onSucess(editedItem);
  }

  function onSucess(editedItem) {
    const clonedCourses = [...categoryType];
    const index = clonedCourses.findIndex((item) => item.id === editedItem.id);

    clonedCourses[index] = editedItem;
    setCategoryType(clonedCourses);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not update the item. Try again");
  }

  function onThumbnail(event) {
    resizedImage(event, setThumbnailFile, 600, 340);
  }

  function onImage(event) {
    resizedImage(event, setImageFile, 1200, 840);
  }

  return (
    <form className="form-admin" onSubmit={onSubmit}>
      <h2>Update your changes</h2>
      <InputField setup={form.title} state={[title, setTitle]} />
      <InputField setup={form.text} state={[text, setText]} />
      <InputField setup={form.search} state={[search, setSearch]} />
      <InputField setup={form.genres} state={[genre, setGenre]} />
      <InputField setup={form.age} state={[age, setAge]} />
      <InputField setup={form.cast} state={[cast, setCast]} />
      <InputField setup={form.year} state={[year, setYear]} />
      <InputFile imageSelect={onThumbnail} label="Thumbnail" />
      <InputFile imageSelect={onImage} label="Background image" />
      <button className="btn-admin">Confirm</button>
      <button onClick={() => setIsModal(null)} className="btn-admin">
        Cancel
      </button>
    </form>
  );
}
