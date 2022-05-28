// npm
import { useContext, useState } from "react";

// files
import { AppContext } from "../contexts/AppContext";
import { createDocumentWithId } from "../firebase/fireStore";
import { createFile } from "../firebase/cloudStorage";
import { FileContext } from "../contexts/FileContext";
import { ModalContext } from "../contexts/ModalContext";
import { readDocument } from "../firebase/fireStore";
import slugify from "../scripts/slugify";

export default function useCreateTitle(path, title, payload) {
  // global state
  const { categoryType, setCategoryType } = useContext(AppContext);
  const { setIsModal } = useContext(ModalContext);
  const { thumbnail, image } = useContext(FileContext);

  // local state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // methods
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const thumbnailFilePath = `assets/thumbnail-${title}.png`;
    const updatedThumbFile = await createFile(thumbnailFilePath, thumbnail);
    const imageFilePath = `assets/image-${title}.png`;
    const updatedImageFile = await createFile(imageFilePath, image);
    payload.thumbnail = updatedThumbFile;
    payload.image = updatedImageFile;

    const id = slugify(title);
    const documentExists = await readDocument(path, id).catch(onFail);
    if (documentExists !== undefined) {
      alert("Sorry the file already exist, use another name");
      return;
    }
    const item = payload;
    const addItem = await createDocumentWithId(path, id, item).catch(onFail);
    if (addItem) onSucess(item, id);
  }

  function onSucess(item, id) {
    item.id = id;
    setCategoryType([...categoryType, item]);
    setIsLoading(false);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
    setIsLoading(false);
    setError(true);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  return { onSubmit, isLoading, error };
}
