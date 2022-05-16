// npm
import { doc, collection } from "firebase/firestore";
import { getDocs, setDoc, deleteDoc } from "firebase/firestore";

// files
import { fireStore } from "./firebase";

// // create
// export async function createDocument(path, data) {
//   const documentPath = collection(fireStore, path);
//   const document = await addDoc(documentPath, data);

//   return document.id;
// }

// export async function createDocumentWithId(path, id, data) {
//   const documentReference = doc(fireStore, path, id);
//   await setDoc(documentReference, data);

//   return `Document with id ${id} created!`;
// }

// // reads
// export async function readDocument(path, id) {
//   const documentPath = doc(fireStore, path, id);
//   const document = await getDoc(documentPath);

//   return document.data();
// }

// export async function readCollection(path) {
//   const collectionPath = collection(fireStore, path);
//   const snapshot = await getDocs(collectionPath);
//   const documents = snapshot.docs.map((item) => {
//     return { id: item.id, ...item.data() };
//   });

//   return documents;
// }

// // update
// export async function updateDocument(path, data) {
//   const id = data.id;
//   const documentPath = doc(fireStore, path, id);

//   await setDoc(documentPath, data);
//   return "Succeed modifying document";
// }

// // delete
// export async function deleteDocument(path, id) {
//   const documentPath = doc(fireStore, path, id);

//   await deleteDoc(documentPath);
//   return "Succeed deleting document";
// }

// create
export async function createDocumentWithId(path, id, data) {
  let payload = { data: undefined, error: false };

  try {
    const documentReference = doc(fireStore, path, id);
    await setDoc(documentReference, data);

    payload = { data: `Document with id ${id} created!`, error: false };
  } catch (error) {
    payload = { data: error, error: true };
  }

  return payload;
}

// read
export async function readCollections(path) {
  const collectionPath = collection(fireStore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}

// Update
export async function updateDocument(path, data) {
  const id = data.id;
  const documentPath = doc(fireStore, path, id);

  await setDoc(documentPath, data);
  return "Succeed modifying document";
}

// Delete
export async function deleteDocument(path, id) {
  const documentPath = doc(fireStore, path, id);

  await deleteDoc(documentPath);
  return "Succeed deleting document";
}
