

import Link from "next/link";

export default function BodySection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ================= POPULAR CATEGORIES ================= */}
        <div className="mb-14">
          <div className="n mb-6 ">
            <h2 className="text-lg font-medium text-black  text-center ">
              Popular Categories
            </h2>

            <Link href="/category/fruits-vegetables" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((item, index) => (
              
              // ✅ CHANGED: div → Link
              <Link
                key={index}
                href={`/category/${item.slug}`}
                className="bg-white border border-pink-500 rounded-xl p-4
                           flex flex-col items-center text-center
                           hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 object-contain mb-3"
                />
                <p className="text-sm text-gray-700">{item.title}</p>
              </Link>

            ))}
          </div>
        </div>

        {/* ================= POPULAR ON DOKANDAR ================= */}
        <div>
          <h2 className="text-lg font-medium text-black mb-8 text-center">
            Popular on Dokandar
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {brands.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= DATA ================= */

const categories = [
  {
    title: "Fruits & Vegetables",
    slug: "fruits-vegetables", // ✅ ADDED
    image: "https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-juicy-fruits-and-vitamins-natural-organic-fruits-png-image_13146415.png",
  },
  {
    title: "Meat & Fish",
    slug: "meat-fish",
    image: "https://www.uaex.uada.edu/life-skills-wellness/food-safety/images/Meat-poultry-fish2.jpg",
  },
  {
    title: "Cooking",
    slug: "cooking",
    image: "https://www.utshob.com/uploads/product_images/featured_images/6204daa92fa74_6204daa92fa75",
  },
  {
    title: "Beverages",
    slug: "beverages",
    image: "https://sagaciresearch.com/wp-content/uploads/2019/09/Top-10-Carbonated-Soft-Drinks-Egypt-V3.jpg",
  },
  {
    title: "Home & Cleaning",
    slug: "home-cleaning",
    image: "https://s3gw.inet.co.th:8082/smegp-image-1/prod/V1/17062021200518%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94.jpg",
  },
  {
    title: "Pest Control",
    slug: "pest-control",
    image: "https://image.made-in-china.com/202f0j00WchukzelOari/Aerosol-Pest-Control-Products-Insecticide-Spray-Flea-Tick-Lice-Killer-Spray.webp",
  },
  {
    title: "Stationery & Office",
    slug: "stationery-office",
    image: "https://t4.ftcdn.net/jpg/06/23/04/51/360_F_623045180_16qugNZq0uDedE9vM01O0Q9RBM8sGG96.jpg",
  },
  {
    title: "Beauty Products",
    slug: "beauty-products",
    image: "https://png.pngtree.com/png-vector/20240818/ourmid/pngtree-geset-of-luxury-beauty-cosmetic-makeup-bdifferent-png-image_13532167.png",
  },
  
];

const brands = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzCTdTeTQFNDdsu037BITi3j3vOE825uscg&s",
  "https://images.seeklogo.com/logo-png/43/2/reckitt-logo-png_seeklogo-438257.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTey7Ge_-uV7p22MGQmpbyXBYoCBg6Y7aMf0Q&s",
  "https://images.seeklogo.com/logo-png/14/1/unilever-logo-png_seeklogo-145123.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcORqLcrh_3ZRjtYRiG6kWWqJp-pByc1o_mQ&s",
  "https://download.logo.wine/logo/Godrej_%26_Boyce/Godrej_%26_Boyce-Logo.wine.png",
  "https://bbf.digital/wp-content/uploads/2016/01/Fresh-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zfstPH7BiDZ-96HRQKGYqgnWm3vlkuEniA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkfi-vJYk_0LdGstkC0lGdkCl9mSeJ1uaMw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBgXiWuXTAkxNsEVr8poEtyso5cAkR0yRzA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxKIZEBdjkqbhpDCAMQr-847eSf1h-3ZBHg&sg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/MGI_Logo.png/1280px-MGI_Logo.png",
];
