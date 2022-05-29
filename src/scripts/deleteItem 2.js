import { deleteDocument } from "../firebase/fireStore";

export default async function deleteItem(path, id, getter, setter) {
  await deleteDocument(path, id);
  const clonedArray = [...getter];
  const deleteItem = clonedArray.filter((item) => item.id !== id);
  return setter(deleteItem);
}
