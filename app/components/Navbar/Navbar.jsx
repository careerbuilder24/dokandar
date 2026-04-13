




"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";



export default function Navbar() {
  const pathname = usePathname();
  const hideHero = pathname === "/login";

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔥 Firebase auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Logged in:", currentUser.phoneNumber);
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <header className="w-full">

        {/* ================= TOP NAVBAR ================= */}
        <div className="bg-gradient-to-r from-pink-50 to-pink-400 border-b">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              {/* <button className="text-2xl">☰</button> */}

              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo2.png"
                  alt="Dokandar Logo"
                  width={40}
                  height={40}
                />
                <span className="text-5xl font-bold text-pink-600">
                  Dokandar
                </span>
              </Link>

              <button className="flex items-center gap-1 text-sm text-pink-600 font-medium">
                📍 Dhaka ▾
              </button>
            </div>

            {/* RIGHT */}
            {/* <div className="flex items-center gap-6"> */}
            <div className="hidden md:flex items-center gap-6">

              <div className="text-sm">
                <button className="font-semibold text-pink-600">EN</button>
                <span className="mx-1 text-gray-400">|</span>
                <button className="text-gray-600">বাংলা</button>
              </div>

              {/* <Link href="/Home" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium">
                Home
              </Link> */}

              <Link href="/category/fruits-vegetables" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium">
                Category
              </Link>

              <Link href="/signup" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium">
                Sign-up for delivery
              </Link>

              <Link href="/Mycart" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium">
                My Cart
              </Link>

              {/* 🔐 LOGIN / LOGOUT SWITCH */}
              {!user ? (
                <Link
                  href="/login"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              )}

              {/* RIGHT SIDEBAR BUTTON */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* ================= HERO SECTION ================= */}
        {!hideHero && (
          <div className="bg-gradient-to-br from-pink-50 to-white">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Grocery Delivered at your Doorstep
                </h1>

                <div className="relative max-w-xl">
                  <input
                    type="text"
                    placeholder="Search for products (e.g. eggs, milk, potato)"
                    className="w-full border-2 border-gray-300 rounded-md pl-4 pr-12 py-3 
                    placeholder-gray-600 focus:outline-none 
                    focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
                  />
                  <span className="absolute right-4 top-3 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <img src="https://hopkinsdiabetesinfo.org/wp-content/uploads/2022/02/Food-Grocery-Vegetables-1140771380.jpg" className="rounded-xl object-cover h-40 w-full" />
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e" className="rounded-xl object-cover h-40 w-full" />
                <img src="https://www.shutterstock.com/image-photo/april-13-2023-beltsy-moldova-600nw-2393735043.jpg" className="rounded-xl object-cover h-40 w-full" />
                <img src="https://thumbs.dreamstime.com/b/grocery-market-bangladesh-asian-bazaar-403976395.jpg" className="rounded-xl object-cover h-40 w-full col-span-2" />
                <img src="https://images.hive.blog/1200x630/https://cdn.steemitimages.com/DQma8UpsyUBf6eHPhnrhiGQDjB5Gz851BAEwEeRyqWd1tPg/20190702_181915.jpg" className="rounded-xl object-cover h-40 w-full" />
              </div>

            </div>
          </div>
        )}
      </header>

      {/* ================= RIGHT SIDEBAR ================= */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="w-72 bg-pink-600 p-6 shadow-xl">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-xl mb-6"
            >
              ✕
            </button>

            <ul className="space-y-4 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="#">My Orders</Link></li>
              <li><Link href="#">Profile</Link></li>
              <li><Link href="#">Help</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}









{/* <Link href="/Category" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium">
                Category
              </Link> */}