import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              alt={product.name}
              style={{ width: "100%" }}
            />
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.price} лв.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
