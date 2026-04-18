
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar/Navbar";
import BodySection from "../components/BodySection/BodySection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import MobileAppSection from "../components/MobileAppSection/MobileAppSection";
import DeliverySection from "../components/DeliverySection/DeliverySection";
import Footer from "../components/Footer/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // const handleSignUp = async () => {
  //   if (!email || !password) {
  //     alert("Please enter email and password");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("/api/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       alert("Account created successfully ✅");
  //       router.push("/login");
  //     } else {
  //       alert(data.error || "Something went wrong");
  //     }
  //   } catch (error) {
  //     alert("Error: " + error.message);
  //   }
  // };
const handleSignUp = async () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    //  1. Create user in Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    //  2. Save to MongoDB
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        uid: user.uid,
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error);

    alert("Account created successfully ");
    router.push("/login");

  } catch (error) {
    alert(error.message);
  }
};
  return (
    <>
      <Navbar />
      <BodySection />
      <BenefitsSection />
      <MobileAppSection />
      <DeliverySection />
      <Footer />

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">

          <button
            onClick={() => router.push("/")}
            className="absolute top-4 right-4 text-black text-xl"
          >
            ✕
          </button>

          <h2 className="text-lg font-semibold mb-4 text-black">
            Sign Up
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border mb-3 p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border mb-4 p-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignUp}
            className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}