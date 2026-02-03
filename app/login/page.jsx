"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/Navbar";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    // save phone temporarily
    localStorage.setItem("dokandar_phone", phone);

    // go to OTP page (or home for now)
    router.push("/login/otp");
  };

  return (
 <>
 <Navbar></Navbar>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">

        {/* Close button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Login
        </h2>

        {/* Facebook */}
        <button className="w-full bg-[#4267B2] text-white py-3 rounded-md mb-3 text-sm font-medium">
          Sign Up or Login with Facebook
        </button>

        {/* Email */}
        <button className="w-full border border-gray-300 py-3 rounded-md mb-6 text-sm font-medium">
          Login with Email
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Phone text */}
        <p className="text-xs text-gray-500 mb-3 uppercase">
          Please enter your mobile phone number
        </p>

        {/* Phone input */}
        <div className="flex items-center border-b border-gray-400 mb-6 pb-2">
          <span className="mr-3 text-sm">🇧🇩 +88</span>
          <input
            type="tel"
            placeholder="Mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md text-sm font-semibold mb-4"
        >
          SIGN UP / LOGIN
        </button>

        {/* Recaptcha text */}
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-blue-500 cursor-pointer">Privacy Policy</span>{" "}
          and{" "}
          <span className="text-blue-500 cursor-pointer">Terms of Service</span>{" "}
          apply.
        </p>

      </div>
    </div>

    
 </>
  );
}
