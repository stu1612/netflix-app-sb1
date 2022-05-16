import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcnxFGfqHmwI76syXNsY9MGIaSd94ElhY",
  authDomain: "netflix-app-sb1.firebaseapp.com",
  projectId: "netflix-app-sb1",
  storageBucket: "netflix-app-sb1.appspot.com",
  messagingSenderId: "744310781270",
  appId: "1:744310781270:web:529f589c02af4a889712f7",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentication = getAuth(app);
