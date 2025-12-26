import React from "react";

const HomePage = () => {
  return (
    <main className="bg-[#E1F5FE] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#B3E5FC] text-white py-32 px-6 text-center rounded-b-3xl">
        <div className="container mx-auto max-w-3xl z-10 relative">
          <h1 className="text-5xl font-bold mb-4">Stay Cool with Klima ACs</h1>
          <p className="text-xl mb-8">
            High-efficiency air conditioners for homes and offices. Comfort meets sustainability.
          </p>
          <a
            href="#products"
            className="bg-white text-[#0288D1] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/ac-hero.jpg')] bg-cover bg-center rounded-b-3xl"></div>
      </section>

      {/* Products/Features Section */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#0288D1]">Our Top AC Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#0288D1]">EcoCool 3000</h3>
              <p className="text-gray-700">
                Energy-efficient AC with fast cooling and silent operation. Perfect for any room.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#0288D1]">BreezeMax 5000</h3>
              <p className="text-gray-700">
                Smart AC with Wi-Fi control and eco-friendly refrigerant. Stay connected and save energy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#0288D1]">CoolHome 100</h3>
              <p className="text-gray-700">
                Compact AC unit ideal for small spaces. Affordable, reliable, and easy to install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#B3E5FC] text-white text-center rounded-t-3xl">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Get Your AC Today!</h2>
          <p className="text-lg mb-8">
            Browse our selection and enjoy fast delivery and installation.
          </p>
          <a
            href="/products"
            className="bg-white text-[#0288D1] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
