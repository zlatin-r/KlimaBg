export default function ProductCard({ product }) {
    const imageUrl = product.image
        ? `http://localhost:8000${product.image}`
        : null;

    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt={product.model}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md mb-4">
                    Няма изображение
                </div>
            )}
            <h2 className="text-xl font-semibold">{product.manufacturer} - {product.model}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Купи сега
            </button>
        </div>
    );
}
