import { useState } from "react";

export default function ProductForm({ onProductCreated }) {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("manufacturer", manufacturer);
        formData.append("model", model);
        formData.append("description", description);
        formData.append("price", price);
        if (imageFile) formData.append("image", imageFile);

        try {
            const res = await fetch("http://localhost:8000/api/products/create/", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!res.ok) throw new Error(JSON.stringify(data));

            // Clear form
            setManufacturer("");
            setModel("");
            setDescription("");
            setPrice("");
            setImageFile(null);

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
            <h2 className="text-2xl font-bold mb-4">Добави нов продукт</h2>
            {error && <p className="text-red-500">{error}</p>}

            <input
                type="text"
                placeholder="Производител"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="text"
                placeholder="Модел"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="number"
                step="0.01"
                placeholder="Цена (напр. 29.99)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                {loading ? "Добавяне..." : "Добави продукт"}
            </button>
        </form>
    );
}
