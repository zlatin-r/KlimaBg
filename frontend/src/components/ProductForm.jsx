// ProductForm.jsx
import { useState } from "react";

export default function ProductForm({ onProductCreated }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("http://localhost:8000/api/products/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, price, image }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(JSON.stringify(data));

            // Clear form
            setName("");
            setPrice("");
            setImage("");

            // Notify parent component
            if (onProductCreated) onProductCreated(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 border rounded-lg shadow space-y-4"
        >
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

            {error && <p className="text-red-500">{error}</p>}

            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="text"
                placeholder="Price (e.g., $29.99)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                {loading ? "Adding..." : "Add Product"}
            </button>
        </form>
    );
}
