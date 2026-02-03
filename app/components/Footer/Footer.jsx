import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">

      {/* ================= TOP CITIES BAR ================= */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-4 text-sm text-gray-700">
          <span className="font-medium">Cities:</span>
          <Link href="#" className="hover:underline">Dhaka</Link>
          <Link href="#" className="hover:underline">Pirojpur</Link>
          <Link href="#" className="hover:underline">Khulna</Link>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About Chaldal */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">
            About Dokandar
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:underline">Our Story</Link></li>
            <li><Link href="#" className="hover:underline">Team</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">
            Customer Service
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            <li><Link href="#" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* For Business */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">
            For Business
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:underline">Corporate</Link></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">
            Payment Methods
          </h4>
          <div className="flex items-center gap-4">
            <img
            src="https://static.vecteezy.com/system/resources/previews/068/764/270/non_2x/bkash-logo-mobile-banking-app-icon-transparent-background-free-png.png"
            alt="bKash"
            className="h-6 object-contain"
            />
            <img
            src="https://thumbs.dreamstime.com/b/kiev-ukraine-september-visa-mastercard-logos-printed-white-paper-visa-mastercard-american-multinational-102631953.jpg"
            alt="Visamastercard"
            className="h-6 object-contain"
            />
            <img
            src="https://images.seeklogo.com/logo-png/14/1/visa-logo-png_seeklogo-149685.png"
            alt="Visa"
            className="h-6 object-contain"
            />
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0mp7VkpsXEQeSUy906yp7u6ZY7dAiNICvw&s"
            alt="nogod"
            className="h-6 object-contain"
            />
          </div>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 gap-4">
          <p>© 2026 Dokandar Limited</p>

          <div className="flex items-center gap-4">
            <button className="border px-3 py-1 rounded text-xs">
              English (EN)
            </button>
            <div className="flex gap-3 text-lg">
              <span>🌐</span>
              <span>📘</span>
              <span>🐦</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
