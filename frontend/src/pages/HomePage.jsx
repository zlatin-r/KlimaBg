import React from "react";

const HomePage = () => {
  return (
    <main className="bg-[#E1F5FE] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#B3E5FC] text-white py-32 px-6 text-center rounded-b-3xl">
        <div className="container mx-auto max-w-3xl z-10 relative">
          <h1 className="text-5xl font-bold mb-4">Бъдете свежи с климатици Klima</h1>
          <p className="text-xl mb-8">
            Високоефективни климатици за домове и офиси. Комфорт и устойчивост в едно.
          </p>
          <a
            href="#products"
            className="bg-white text-[#0288D1] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Пазарувай сега
          </a>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('/ac-hero.jpg')] bg-cover bg-center rounded-b-3xl"></div>
      </section>

      {/* Products/Features Section */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#0288D1]">Нашите топ продукти</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#0288D1]">EcoCool 3000</h3>
              <p className="text-gray-700">
                Енергийно ефективен климатик с бързо охлаждане и тиха работа. Перфектен за всяка стая.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#0288D1]">BreezeMax 5000</h3>
              <p className="text-gray-700">
                Интелигентен климатик с Wi-Fi контрол и екологичен фреон. Останете свързани и пестете енергия.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#0288D1]">CoolHome 100</h3>
              <p className="text-gray-700">
                Компактен климатик, идеален за малки пространства. Достъпен, надежден и лесен за инсталиране.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#B3E5FC] text-white text-center rounded-t-3xl">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Вземете своя климатик днес!</h2>
          <p className="text-lg mb-8">
            Разгледайте нашата селекция и се насладете на бърза доставка и монтаж.
          </p>
          <a
            href="/products"
            className="bg-white text-[#0288D1] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            Пазарувай сега
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
