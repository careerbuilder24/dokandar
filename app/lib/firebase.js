import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * Firebase config
 * (SAFE to keep keys public for web apps)
 */
const firebaseConfig = {
  apiKey: "AIzaSyBOxfEkRvAR9QL7OQiJoiYXv8g5M4oVLSU",
  authDomain: "dokandar-de7fe.firebaseapp.com",
  projectId: "dokandar-de7fe",
  storageBucket: "dokandar-de7fe.appspot.com",
  messagingSenderId: "404197848257",
  appId: "1:404197848257:web:8fff00a1051abdd3c75040",
};

/**
 * Prevent re-initialization on hot reload
 */
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

/**
 * Firebase services
 */
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
