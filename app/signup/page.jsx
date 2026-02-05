// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import Navbar from "../components/Navbar/Navbar";
// // import BodySection from "../components/BodySection/BodySection";
// // import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
// // import MobileAppSection from "../components/MobileAppSection/MobileAppSection";
// // import DeliverySection from "../components/DeliverySection/DeliverySection";
// // import Footer from "../components/Footer/Footer";

// // export default function LoginPage() {
// //   const [phone, setPhone] = useState("");
// //   const router = useRouter();

// //   const handleLogin = () => {
// //     if (!phone || phone.length < 10) {
// //       alert("Please enter a valid mobile number");
// //       return;
// //     }

// //     // save phone temporarily
// //     localStorage.setItem("dokandar_phone", phone);

// //     // go to OTP page (or home for now)
// //     router.push("/login/otp");
// //   };

// //   return (
// //  <>
// //  <Navbar></Navbar>
// //  <BodySection></BodySection>
// //  <BenefitsSection></BenefitsSection>
// //  <MobileAppSection></MobileAppSection>
// //  <DeliverySection></DeliverySection>
// //  <Footer></Footer>
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
// //       <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">

// //         {/* Close button */}
// //         <button
// //           onClick={() => router.push("/")}
// //           className="absolute top-4 right-4 text-black text-xl"
// //         >
// //           ✕
// //         </button>

// //         {/* Title */}
// //         <h2 className="text-lg font-semibold mb-4 text-black">
// //           Sign-Up
// //         </h2>

// //         {/* Facebook */}
// //         <button className="w-full bg-[#4267B2] text-white py-3 rounded-md mb-3 text-sm font-medium">
// //           Sign Up with Facebook
// //         </button>

// //         {/* Email */}
// //         <button className="w-full border text-black border-black py-3 rounded-md mb-6 text-sm font-medium">
// //           Sign Up with Email
// //         </button>

// //         {/* Divider */}
// //         <div className="flex items-center gap-3 mb-6">
// //           <div className="flex-1 h-px bg-gray-300" />
// //           <span className="text-sm text-gray-500">or</span>
// //           <div className="flex-1 h-px bg-gray-300" />
// //         </div>

// //         {/* Phone text */}
// //         <p className="text-xs text-black mb-3 uppercase">
// //           Please enter your mobile phone number
// //         </p>

// //         {/* Phone input */}
// //         <div className="flex items-center text-black border-b border-gray-700 mb-6 pb-2">
// //           <span className="mr-3 text-sm">🇧🇩 +88</span>
// //           <input
// //             type="tel"
// //             placeholder="Mobile number"
// //             value={phone}
// //             onChange={(e) => setPhone(e.target.value)}
// //             className="w-full outline-none text-sm"
// //           />
// //         </div>

// //         {/* Login button */}
// //         <button
// //           onClick={handleLogin}
// //           className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md text-sm font-semibold mb-4"
// //         >
// //           SIGN UP
// //         </button>

// //         {/* Recaptcha text */}
// //         <p className="text-xs text-gray-400 text-center leading-relaxed">
// //           This site is protected by reCAPTCHA and the Google{" "}
// //           <span className="text-blue-500 cursor-pointer">Privacy Policy</span>{" "}
// //           and{" "}
// //           <span className="text-blue-500 cursor-pointer">Terms of Service</span>{" "}
// //           apply.
// //         </p>

// //       </div>
// //     </div>

    
// //  </>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "../components/Navbar/Navbar";
// import BodySection from "../components/BodySection/BodySection";
// import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
// import MobileAppSection from "../components/MobileAppSection/MobileAppSection";
// import DeliverySection from "../components/DeliverySection/DeliverySection";
// import Footer from "../components/Footer/Footer";
// import { signUpWithEmail } from "../lib/auth";

// export default function SignupPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       await signUpWithEmail(email, password);
//       alert("Account created successfully");
//       router.push("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <BodySection />
//       <BenefitsSection />
//       <MobileAppSection />
//       <DeliverySection />
//       <Footer />

//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//         <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">

//           <button
//             onClick={() => router.push("/")}
//             className="absolute top-4 right-4 text-black text-xl"
//           >
//             ✕
//           </button>

//           <h2 className="text-lg font-semibold mb-4 text-black">
//             Sign Up
//           </h2>

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border px-3 py-2 rounded mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border px-3 py-2 rounded mb-6"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={handleSignup}
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold"
//           >
//             CREATE ACCOUNT
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "../components/Navbar/Navbar";
// import BodySection from "../components/BodySection/BodySection";
// import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
// import MobileAppSection from "../components/MobileAppSection/MobileAppSection";
// import DeliverySection from "../components/DeliverySection/DeliverySection";
// import Footer from "../components/Footer/Footer";

// export default function SignUpPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <>
//       <Navbar />
//       <BodySection />
//       <BenefitsSection />
//       <MobileAppSection />
//       <DeliverySection />
//       <Footer />

//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
//         <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">

//           <button
//             onClick={() => router.push("/")}
//             className="absolute top-4 right-4 text-black text-xl"
//           >
//             ✕
//           </button>

//           <h2 className="text-lg font-semibold mb-6 text-black">
//             Sign Up
//           </h2>

//           {/* EMAIL */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border px-4 py-3 rounded mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           {/* PASSWORD */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border px-4 py-3 rounded mb-6"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold"
//           >
//             SIGN UP
//           </button>

//           <p className="text-xs text-gray-400 text-center mt-6">
//             By signing up, you agree to our{" "}
//             <span className="text-blue-500 cursor-pointer">Privacy Policy</span>{" "}
//             and{" "}
//             <span className="text-blue-500 cursor-pointer">Terms of Service</span>.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

import Navbar from "../components/Navbar/Navbar";
import BodySection from "../components/BodySection/BodySection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import MobileAppSection from "../components/MobileAppSection/MobileAppSection";
import DeliverySection from "../components/DeliverySection/DeliverySection";
import Footer from "../components/Footer/Footer";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully ✅");
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
