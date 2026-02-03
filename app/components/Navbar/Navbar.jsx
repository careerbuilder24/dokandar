
// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="w-full">

//       {/* ================= TOP NAVBAR ================= */}
//       <div className="bg-gradient-to-r from-pink-100 to-white border-b">
//         <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

//           {/* LEFT */}
//           <div className="flex items-center gap-4">
//             {/* Hamburger */}
//             <button className="text-2xl">☰</button>

//             {/* Logo */}
//             <Link href="/" className="text-5xl font-bold">
//               <span className="text-pink-600">Dokandar</span>
//             </Link>

//             {/* Location */}
//             <button className="flex items-center gap-1 text-sm text-pink-600 font-medium">
//               📍 Dhaka ▾
//             </button>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-6">
//             {/* Language */}
//             <div className="text-sm">
//               <button className="font-semibold text-pink-600">EN</button>
//               <span className="mx-1 text-gray-400">|</span>
//               <button className="text-gray-600">বাংলা</button>
//             </div>

//             {/* Login */}
//             <Link
//               href="/login"
//               className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* ================= CATEGORY BAR ================= */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">

//           <button className="flex flex-col items-center text-sm font-medium text-pink-600">
//             🛒
//             <span>Grocery</span>
//           </button>

//           <button className="flex flex-col items-center text-sm text-gray-600 hover:text-pink-600">
//             💊
//             <span>Pharmacy</span>
//           </button>

//           <button className="flex flex-col items-center text-sm text-gray-600 hover:text-pink-600">
//             🍳
//             <span>Cookups</span>
//           </button>

//         </div>
//       </div>

//       {/* ================= HERO SECTION ================= */}
//       <div className="bg-gradient-to-br from-pink-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

//           {/* LEFT CONTENT */}
//           <div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-6">
//               Grocery Delivered at your Doorstep
//             </h1>

//             {/* Search */}
//             <div className="relative max-w-xl">
//               <input
//                 type="text"
//                 placeholder="Search for products (e.g. eggs, milk, potato)"
//                 className="w-full border-2 border-gray-300 rounded-md pl-4 pr-12 py-3 
//              placeholder-gray-600
//              focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300"

//               />
//               <span className="absolute right-4 top-3 text-gray-400">
//                 🔍
//               </span>
//             </div>
//           </div>

//           {/* RIGHT IMAGES */}
//           <div className="grid grid-cols-3 gap-4">
//             <img
//               src="https://hopkinsdiabetesinfo.org/wp-content/uploads/2022/02/Food-Grocery-Vegetables-1140771380.jpg"
//               className="rounded-xl object-cover h-40 w-full"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1542838132-92c53300491e"
//               className="rounded-xl object-cover h-40 w-full"
//             />
//             <img
//               src="https://www.shutterstock.com/image-photo/april-13-2023-beltsy-moldova-600nw-2393735043.jpg"
//               className="rounded-xl object-cover h-40 w-full"
//             />
//             <img
//               src="https://thumbs.dreamstime.com/b/grocery-market-bangladesh-asian-bazaar-403976395.jpg"
//               className="rounded-xl object-cover h-40 w-full col-span-2"
//             />
//             <img
//               src="https://images.hive.blog/1200x630/https://cdn.steemitimages.com/DQma8UpsyUBf6eHPhnrhiGQDjB5Gz851BAEwEeRyqWd1tPg/20190702_181915.jpg"
//               className="rounded-xl object-cover h-40 w-full"
//             />
//           </div>

//         </div>
//       </div>

//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const hideHero = pathname === "/login";

  return (
    <header className="w-full">

      {/* ================= TOP NAVBAR ================= */}
      <div className="bg-gradient-to-r from-pink-100 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button className="text-2xl">☰</button>

            <Link href="/" className="text-5xl font-bold text-pink-600">
              Dokandar
            </Link>

            <button className="flex items-center gap-1 text-sm text-pink-600 font-medium">
              📍 Dhaka ▾
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <button className="font-semibold text-pink-600">EN</button>
              <span className="mx-1 text-gray-400">|</span>
              <button className="text-gray-600">বাংলা</button>
            </div>

            {/* LOGIN BUTTON WORKS */}
            <Link
              href="/login"
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">

          <button className="flex flex-col items-center text-sm font-medium text-pink-600">
            🛒
            <span>Grocery</span>
          </button>

          <button className="flex flex-col items-center text-sm text-gray-600 hover:text-pink-600">
            💊
            <span>Pharmacy</span>
          </button>

          <button className="flex flex-col items-center text-sm text-gray-600 hover:text-pink-600">
            🍳
            <span>Cookups</span>
          </button>

        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      {!hideHero && (
        <div className="bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT CONTENT */}
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

            {/* RIGHT IMAGES */}
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
  );
}


