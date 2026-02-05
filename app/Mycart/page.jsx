"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      quantity: 2,
      image: "https://i.imgur.com/1p1Z4wL.png",
    },
    {
      id: 2,
      name: "Chicken Breast",
      price: 260,
      quantity: 1,
      image: "https://i.imgur.com/BJ8JwYk.png",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-8 text-black">My Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-black mb-4">Your cart is empty</p>
            <Link
              href="/"
              className="bg-pink-500 text-white px-6 py-3 rounded-md"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CART ITEMS
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ৳ {item.price} each
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 border rounded"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">
                      ৳ {item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-500 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div> */}

            {/* SUMMARY */}
            <div className="bg-white p-6 rounded-lg text-black shadow-sm h-fit">
              <h2 className="text-lg font-semibold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between text-black mb-2 text-sm">
                <span>Subtotal</span>
                <span>৳ {subtotal}</span>
              </div>

              <div className="flex justify-between text-black mb-2 text-sm">
                <span>Delivery Fee</span>
                <span>৳ 40</span>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>৳ {subtotal + 40}</span>
              </div>

              <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
