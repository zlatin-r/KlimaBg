import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/") // Django API
      .then((res) => {
        console.log("Products fetched:", res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []); // <-- make sure the array is closed

  if (loading) return <p>Зареждане на продукти...</p>;
  if (products.length === 0) return <p>Няма налични продукти.</p>;

  return (
    <div>
      <h1>Продукти</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#888",
                }}
              >
                Няма изображение
              </div>
            )}
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.price} лв.</p>
            <p>Охлаждане: {product.btu_cooling} BTU</p>
            <p>Отопление: {product.btu_heating} BTU</p>
            <p>{product.in_stock ? "Налично" : "Няма на склад"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
