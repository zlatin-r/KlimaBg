import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import ProductForm from "../components/ProductForm.jsx";


export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = () => {
        fetch("http://localhost:8000/api/products/")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleProductCreated = (newProduct) => {
        setProducts((prev) => [newProduct, ...prev]);
    };

    if (loading) return <p className="p-6">Loading products...</p>;

    return (
        <div className="p-6 space-y-8">
            <ProductForm onProductCreated={handleProductCreated} />

            <h1 className="text-4xl font-bold">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
