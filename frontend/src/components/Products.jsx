export default function Products() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <img
                src="https://via.placeholder.com/300x200.png?text=Product"
                alt="Product"
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Short description of the product goes here.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Buy Now
            </button>
        </div>
    );
}
