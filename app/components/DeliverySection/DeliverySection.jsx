export default function DeliverySection() {
  return (
    <section
      className="relative bg-pink-50 overflow-hidden"
    >
      {/* Background Illustration */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-80"
        style={{
          backgroundImage:
            "url('delivery - Copy.png')",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          Currently Delivering in
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* City Pills */}
          <span className="px-10 py-3 bg-pink-500 text-white rounded-full text-sm font-medium shadow hover:bg-pink-600 cursor-pointer">
            Dhaka
          </span>

          <span className="px-10 py-3 bg-pink-500 text-white rounded-full text-sm font-medium shadow  hover:bg-pink-600 cursor-pointer">
            Pirojpur
          </span>

          <span className="px-10 py-3 bg-pink-500 text-white rounded-full text-sm font-medium shadow hover:bg-pink-600 cursor-pointer">
            Khulna
          </span>
        </div>
      </div>
    </section>
  );
}
