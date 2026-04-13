"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar/Navbar";
import { PRODUCTS } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import Footer from "@/app/components/Footer/Footer";

export default function ProductListPage() {
  const { subcategory } = useParams();
  const products = PRODUCTS[subcategory] || [];
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      
      

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 capitalize">
          {subcategory.replaceAll("-", " ")}
        </h1>

        {products.length === 0 ? (
          <p className="text-gray-500">
            No products found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="border rounded-lg p-4 relative hover:shadow"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-32 mx-auto object-contain"
                />

                <p className="mt-3 font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">{p.unit}</p>
                <p className="text-pink-600 font-semibold">৳ {p.price}</p>

                <button
                  onClick={() => addToCart(p)}
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-pink-500 text-pink-600 text-xl"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
