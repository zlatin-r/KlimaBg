import Products from "../components/Products";

function HomePage() {
    return (
        <div className="bg-gray-50 min-h-screen w-full">
            {/* Hero Section */}
            <section className="bg-blue-100 py-20 w-full flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 px-12">
                    <h1 className="text-6xl font-bold text-blue-700 mb-6">Welcome to KlimaBg</h1>
                    <p className="text-xl text-gray-700 mb-6">
                        Your climate-friendly marketplace. Explore sustainable products for a better future.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                        Shop Now
                    </button>
                </div>
                <div className="lg:w-1/2 px-12">
                    <img
                        src="http://127.0.0.1:8000/media/hero/hero-img.jpg"
                        alt="Hero"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Products Section */}
            <section className="w-full py-16 px-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <Products />
                    <Products />
                    <Products />
                </div>
            </section>
        </div>
    );
}

export default HomePage;