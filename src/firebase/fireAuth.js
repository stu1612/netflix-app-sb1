// NPM Packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// files
import { authentication } from "./firebase";

// TEST 1

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

// TEST 2

// export async function createUser(email, password) {
//   let payload = { data: undefined, error: false };

//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       authentication,
//       email,
//       password
//     );

//     payload.data = userCredential.user.uid;
//   } catch (error) {
//     payload = { data: error.code, error: true };
//   }

//   return payload;
// }

// Test 3
// export async function createUser(email, password) {
//   const userCredential = await createUserWithEmailAndPassword(
//     authentication,
//     email,
//     password
//   );

//   return userCredential.user.uid;
// }

// export async function loginUser(email, password) {
//   let payload = { data: undefined, error: false };

//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       authentication,
//       email,
//       password
//     );

//     payload.data = userCredential.user.uid;
//   } catch (error) {
//     payload = { data: error.code, error: true };
//   }

//   return payload;
// }

// export async function recoverUser(email) {
//   let payload = { data: undefined, error: false };

//   try {
//     await sendPasswordResetEmail(authentication, email);
//     payload.data = "Email sent";
//   } catch (error) {
//     payload = { data: error.code, error: true };
//   }

//   return payload;
// }

// TEST 3

// export async function createUser(email, password) {
//   const userCredential = await createUserWithEmailAndPassword(
//     authentication,
//     email,
//     password
//   );

//   return userCredential.user.uid;
// }

// export async function loginUser(email, password) {
//   const userCredential = await signInWithEmailAndPassword(
//     authentication,
//     email,
//     password
//   );
//   return userCredential.user.uid;
// }

// export async function recoverUser(email) {
//   await sendPasswordResetEmail(authentication, email);
// }

// Methods
// export async function createUser(email, password) {
//   const userCredential = await createUserWithEmailAndPassword(
//     authentication,
//     email,
//     password
//   );

//   return userCredential.user.uid;
// }

// export async function loginUser(email, password) {
//   const userCredential = await signInWithEmailAndPassword(
//     authentication,
//     email,
//     password
//   );
//   return userCredential.user.uid;
// }

// export async function recoverUser(email) {
//   await sendPasswordResetEmail(authentication, email);
// }
