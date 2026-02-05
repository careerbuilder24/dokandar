// "use client";

// import { useParams } from "next/navigation";
// import Navbar from "@/app/components/Navbar/Navbar";

// const CATEGORY_MAP = {
//   "fruits-vegetables": {
//     title: "Fruits & Vegetables",
//     subcategories: ["Fresh Vegetables", "Fresh Fruits"],
//   },
//   "meat-fish": {
//     title: "Meat & Fish",
//     subcategories: [
//       "Chicken & Poultry",
//       "Premium Perishables",
//       "Frozen Fish",
//       "Meat",
//       "Dried Fish",
//     ],
//   },
//   cooking: {
//     title: "Cooking",
//     subcategories: [
//       "Spices",
//       "Salt & Sugar",
//       "Rice",
//       "Dal or Lentil",
//       "Oil",
//     ],
//   },
//   beverages: {
//     title: "Beverages",
//     subcategories: [
//       "Tea",
//       "Soft Drinks",
//       "Coffee",
//       "Juice",
//       "Water",
//     ],
//   },
//   "home-cleaning": {
//     title: "Home & Cleaning",
//     subcategories: [
//       "Dishwashing Supplies",
//       "Laundry",
//       "Toilet Cleaners",
//       "Pest Control",
//     ],
//   },
//   "pest-control": {
//     title: "Pest Control",
//     subcategories: [
//       "Mosquito Spray",
//       "Coils",
//       "Liquid Repellent",
//     ],
//   },
//   "stationery-office": {
//     title: "Stationery & Office",
//     subcategories: [
//       "Office Electronics",
//       "Organizers",
//       "Writing & Printing",
//       "School Supplies",
//     ],
//   },
// };

// export default function CategoryPage() {
//   const { slug } = useParams();
//   const category = CATEGORY_MAP[slug];

//   if (!category) {
//     return <div className="p-10">Category not found</div>;
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6">

//         {/* LEFT SIDEBAR */}
//         <aside className="w-64 border-r pr-4">
//           <h3 className="font-semibold mb-4">Categories</h3>
//           <ul className="space-y-2 text-sm">
//             {Object.values(CATEGORY_MAP).map((cat, i) => (
//               <li key={i} className="text-gray-600">
//                 {cat.title}
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main className="flex-1">
//           {/* Breadcrumb */}
//           <p className="text-sm text-gray-500 mb-4">
//             Food &gt; <span className="text-black">{category.title}</span>
//           </p>

//           {/* Title */}
//           <h1 className="text-2xl font-bold mb-6">
//             {category.title}
//           </h1>

//           {/* Subcategories grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {category.subcategories.map((sub, i) => (
//               <div
//                 key={i}
//                 className="border rounded-lg p-4 text-center hover:shadow cursor-pointer"
//               >
//                 <div className="h-24 bg-gray-100 rounded mb-3"></div>
//                 <p className="text-sm font-medium">{sub}</p>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }



// const categories = [
//   {
//     title: "Fruits & Vegetables",
//     slug: "fruits-vegetables",
//     image: "https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-juicy-fruits-and-vitamins-natural-organic-fruits-png-image_13146415.png",
//   },
//   {
//     title: "Meat & Fish",
//     slug: "meat-fish",
//     image: "https://www.uaex.uada.edu/life-skills-wellness/food-safety/images/Meat-poultry-fish2.jpg",
//   },
//   {
//     title: "Cooking",
//     slug: "cooking",
//     image: "https://www.utshob.com/uploads/product_images/featured_images/6204daa92fa74_6204daa92fa75",
//   },
//   {
//     title: "Beverages",
//     slug: "beverages",
//     image: "https://sagaciresearch.com/wp-content/uploads/2019/09/Top-10-Carbonated-Soft-Drinks-Egypt-V3.jpg",
//   },
//   {
//     title: "Home & Cleaning",
//     slug: "home-cleaning",
//     image: "https://s3gw.inet.co.th:8082/smegp-image-1/prod/V1/17062021200518%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94.jpg",
//   },
//   {
//     title: "Pest Control",
//     slug: "pest-control",
//     image: "https://image.made-in-china.com/202f0j00WchukzelOari/Aerosol-Pest-Control-Products-Insecticide-Spray-Flea-Tick-Lice-Killer-Spray.webp",
//   },
//   {
//     title: "Stationery & Office",
//     slug: "stationery-office",
//     image: "https://t4.ftcdn.net/jpg/06/23/04/51/360_F_623045180_16qugNZq0uDedE9vM01O0Q9RBM8sGG96.jpg",
//   },
// ];


"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";

/* ================= CATEGORY DATA ================= */

const CATEGORY_MAP = {
  "fruits-vegetables": {
    title: "Fruits & Vegetables",
    subcategories: [
      {
        title: "Fresh Vegetables",
        image:
          "https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Fresh Fruits",
        image:
          "https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1",
      },
    ],
  },

  "meat-fish": {
    title: "Meat & Fish",
    subcategories: [
      {
        title: "Chicken & Poultry",
        image:
          "https://chaldn.com/_mpimage/chicken-poultry?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117422&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Frozen Fish",
        image:
          "https://chaldn.com/_mpimage/frozen-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81235&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Meat",
        image:
          "https://chaldn.com/_mpimage/meat?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117424&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Dried Fish",
        image:
          "https://chaldn.com/_mpimage/dried-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81236&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Tofu & Meat Alternatives",
        image:
          "https://chaldn.com/_mpimage/tofu-meat-alternatives?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D29189&q=low&v=1&m=400&webp=1",
      },
    ],
  },

  cooking: {
    title: "Cooking",
    subcategories: [
      {
        title: "Spices",
        image:
          "https://chaldn.com/_mpimage/spices?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101151&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Salt & Sugar",
        image:
          "https://chaldn.com/_mpimage/salt-sugar?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166346&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Rice",
        image:
          "https://chaldn.com/_mpimage/rice?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166345&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Dal or Lentil",
        image:
          "https://chaldn.com/_mpimage/dal-or-lentil?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D29722&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Oil",
        image:
          "https://chaldn.com/_mpimage/oil?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183456&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Ghee",
        image:
          "https://chaldn.com/_mpimage/ghee?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166360&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Colors & Flavours",
        image:
          "https://chaldn.com/_mpimage/colors-flavours?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D31480&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Ready Mix",
        image:
          "https://chaldn.com/_mpimage/ready-mix?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166361&q=best&v=1&m=400&webp=1",
      },
       {
        title: "Premium Ingredients",
        image:
          "https://chaldn.com/_mpimage/premium-ingredients?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28689&q=low&v=1&m=400&webp=1",
      },
    ],
  },

  beverages: {
    title: "Beverages",
    subcategories: [
      {
        title: "Tea",
        image:
          "https://chaldn.com/_mpimage/tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D82846&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Soft Drinks",
        image:
          "https://chaldn.com/_mpimage/soft-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D27882&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Coffee",
        image:
          "https://chaldn.com/_mpimage/coffee?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D31521&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Juice",
        image:
          "https://chaldn.com/_mpimage/juice?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D30218&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Water",
        image:
          "https://chaldn.com/_mpimage/water?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D27886&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Syrups & Powder Drinks",
        image:
          "https://chaldn.com/_mpimage/syrups-powder-drinks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D167640&q=best&v=1&m=400&webp=1",
      },
    ],
  },

  "home-cleaning": {
    title: "Home & Cleaning",
    subcategories: [
      {
        title: "Dishwashing Supplies",
        image:
          "https://chaldn.com/_mpimage/dishwashing-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166467&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Laundry",
        image:
          "https://chaldn.com/_mpimage/laundry?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166470&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Toilet Cleaners",
        image:
          "https://chaldn.com/_mpimage/toilet-cleaners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166465&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Napkins & Paper Products",
        image:
          "https://chaldn.com/_mpimage/napkins-paper-products?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166464&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Pest Control",
        image:
          "https://chaldn.com/_mpimage/pest-control?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166463&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Floor & Glass Cleaners",
        image:
          "https://chaldn.com/_mpimage/floor-glass-cleaners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166462&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Cleaning Accessories",
        image:
          "https://chaldn.com/_mpimage/cleaning-accessories?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166334&q=low&v=1&m=400&webp=1",
      },
      {
        title: "Air Fresheners",
        image:
          "https://chaldn.com/_mpimage/air-fresheners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35234&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Disposables & Trash Bags",
        image:
          "https://chaldn.com/_mpimage/disposables-trash-bags?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166471&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Shoe Care",
        image:
          "https://chaldn.com/_mpimage/shoe-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35520&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Trash Bin & Basket",
        image:
          "https://chaldn.com/_mpimage/trash-bin-basket?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98942&q=low&v=1&m=400&webp=1",
      },
    ],
  },

  "pest-control": {
    title: "Pest Control",
    subcategories: [
      {
        title: "Mosquito Spray",
        image:
          "https://image.made-in-china.com/2f0j00PoiuclBGvErh/Aerosol-Pest-Control-Products-Insecticide-Spray-Flea-Tick-Lice-Killer-Spray.webp",
      },
      {
        title: "Coils",
        image:
          "https://image.made-in-china.com/202f0j00eKjbZWTPZRkr/Pest-Control-Mosquito-Killer-Repellent-Coil.webp"
      },
      {
        title: "Liquid Repellent",
        image:
          "https://chaldn.com/_mpimage/mortein-mosquito-repellent-insta-vaporizer-refill-45-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D168844&q=best&v=1&m=400&webp=1"
      },
    ],
  },

  "stationery-office": {
    title: "Stationery & Office",
    subcategories: [
      {
        title: "Office Electronics",
        image:
          "https://chaldn.com/_mpimage/office-electronics?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166410&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Organizers",
        image:
          "https://chaldn.com/_mpimage/organizers?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166406&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Writing & Printing",
        image:
          "https://chaldn.com/_mpimage/writing-printing?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166403&q=best&v=1&m=400&webp=1",
      },
      {
        title: "Paper Supplies",
        image:
          "https://chaldn.com/_mpimage/paper-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166402&q=best&v=1&m=400&webp=11",
      },
      {
        title: "School Supplies",
        image:
          "https://chaldn.com/_mpimage/school-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96743&q=best&v=1&m=400&webp=1",
      },
    ],
  },
};

/* ================= PAGE ================= */

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORY_MAP[slug];

  if (!category) {
    return <div className="p-10">Category not found</div>;
  }

  return (
    <>
      <Navbar />
      

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 border-r pr-4">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {Object.entries(CATEGORY_MAP).map(([key, cat]) => (
              <li key={key}>
                <Link
                  href={`/category/${key}`}
                  className={`block ${
                    key === slug
                      ? "text-pink-600 font-semibold"
                      : "text-gray-600 hover:text-pink-500"
                  }`}
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-4">
            Food &gt; <span className="text-black">{category.title}</span>
          </p>

          {/* Title */}
          <h1 className="text-2xl font-bold mb-6">
            {category.title}
          </h1>

          {/* Subcategories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {category.subcategories.map((sub, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 text-center hover:shadow cursor-pointer"
              >
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="h-28 mx-auto object-contain mb-3"
                />
                <p className="text-sm font-medium">{sub.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
