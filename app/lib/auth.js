import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

// SIGN UP
export const signUpWithEmail = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
export const loginWithEmail = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
export const logoutUser = async () => {
  return await signOut(auth);
};
