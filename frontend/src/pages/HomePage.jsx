import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products"; // optional: if you already have a Products component

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/products/");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <header style={{ padding: "2rem", textAlign: "center", background: "#f5f5f5" }}>
                <h1>Welcome to KlimaBG</h1>
                <p>Discover our climate control products</p>
            </header>

            <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem", padding: "2rem" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
                        <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                        <h3>{product.name}</h3>
                        <p>{product.brand}</p>
                        <p>Price: {product.price} EUR</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default HomePage;
