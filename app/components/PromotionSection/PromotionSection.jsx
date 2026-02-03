export default function PromotionSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                15 warehouses
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                all over Bangladesh
              </p>
            </div>
            <span className="text-4xl">🏬</span>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                2 million orders
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                have been delivered
              </p>
            </div>
            <span className="text-4xl">📦</span>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                70,000 families
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                are being served
              </p>
            </div>
            <span className="text-4xl">👨‍👩‍👧‍👦</span>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                140 million Taka
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                customer savings
              </p>
            </div>
            <span className="text-4xl">💰</span>
          </div>

        </div>

      </div>
    </section>
  );
}
