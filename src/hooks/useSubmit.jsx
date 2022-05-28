// npm
import { useContext, useState } from "react";

// files
import { createDocumentWithId } from "../firebase/fireStore";
import { ModalContext } from "../contexts/ModalContext";
import { readDocument } from "../firebase/fireStore";
import slugify from "../scripts/slugify";

export default function useSubmit(path, name, payload, getter, setter) {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // local state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // methods
  async function addItem(event) {
    event.preventDefault();
    setIsLoading(true);
    const id = slugify(name);
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
    setter([...getter, item]);
    setIsLoading(false);
    setIsModal(null);
  }

  function onFail(error) {
    console.error(error);
    setIsLoading(false);
    setError(true);
    alert("Could not create a document, check that the name is not reapeated.");
  }
  return { addItem, isLoading, error };
}
