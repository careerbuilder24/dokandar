"use client";

import { useEffect } from "react";
import { auth, db } from "../lib/firebase";

export default function TestFirebase() {
  useEffect(() => {
    console.log("Firebase Auth:", auth);
    console.log("Firestore DB:", db);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">
        Firebase Connected ✅
      </h1>
      <p>Check console for Firebase objects</p>
    </div>
  );
}
