// NPM Packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// files
import { authentication } from "./firebase";

export async function createUser(email, password) {
  const credentials = await createUserWithEmailAndPassword(
    authentication,
    email,
    password
  );

  return credentials.user.uid;
}

export async function loginUser(email, password) {
  const credentials = await signInWithEmailAndPassword(
    authentication,
    email,
    password
  );

  return credentials.user.uid;
}

export async function recoverUser(email) {
  await sendPasswordResetEmail(authentication, email);
  return "Email sent";
}
