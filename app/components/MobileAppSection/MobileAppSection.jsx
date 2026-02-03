export default function MobileAppSection() {
  return (
    <section className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Download The Dokandar App Now!
            </h2>

            <p className="text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Get <span className="font-semibold">5% off</span> on your first order
              through the Dokandar app and make your shopping experience even
              smoother!
            </p>

            {/* Store Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center md:justify-end">
            <img
              src="Mobile app picture.png"
              alt="Mobile App"
              className="h-[420px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
