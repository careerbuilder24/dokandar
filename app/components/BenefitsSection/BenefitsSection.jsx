export default function BenefitsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* SECTION TITLE */}
        <h2 className="text-xl font-medium text-center text-black mb-10">
          Shop & Get More
        </h2>

        {/* ================= TOP 3 CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Shop & Earn Points */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Shop & Earn Points
              </h3>
              <p className="text-sm text-gray-600">
                The more you shop the more you earn – cashback, free shipping,
                exclusive offers and more. Discover the perks of Egg Club.
              </p>
            </div>
            <img
              src="dokandar.png"
              className="w-full h-52 object-cover"
              alt=""
            />
          </div>

          {/* Deal of the Day */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Deal of the Day
              </h3>
              <p className="text-sm text-gray-600">
                Stock up on your favorite groceries for less with unbeatable
                deals. Limited stock available.
              </p>
            </div>
            <img
              src="https://copperton.net/wp-content/uploads/2020/05/packaged-food-1000.jpg"
              className="w-full h-52 object-cover"
              alt=""
            />
          </div>

          {/* Premium Care */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Premium Care
              </h3>
              <p className="text-sm text-gray-600">
                Too busy to manage orders? Let our premium support team handle
                everything for you.
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1267270697/photo/young-handsome-male-customer-support-phone-operator-with-headset-working-in-call-center.jpg?s=612x612&w=0&k=20&c=WhVHVek0lZUD_gokRboHyCwqx4GAACOLPNPMIT-1Z70="
              className="w-full h-52 object-cover"
              alt=""
            />
          </div>

        </div>

        {/* ================= BOTTOM 2 CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Shop Daily Necessities */}
         <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Shop your daily necessities
          </h3>

          <p className="text-sm text-gray-600 mb-6 max-w-md">
            Shop from our popular category, explore special offers and receive
            grocery on your doorstep within 1 hour.
          </p>

          <button className="w-fit bg-pink-500 hover:bg-pink-600 
                             text-white px-6 py-2 rounded-md text-sm">
            Start Shopping
          </button>
        </div>

        {/* ================= RIGHT BACKGROUND IMAGE ================= */}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/man-woman-shopping-grocery-store_23-2149483213.jpg?semt=ais_user_personalization&w=740&q=80')",
          }}
        />
      </div>
    </div>

          {/* Video Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
  className="w-full h-72 rounded-xl"
  src="https://www.youtube.com/embed/usZUYRrYbG4"
  title="Online grocery shopping animation"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}
