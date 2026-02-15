// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList({ products }) {
  // group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-list">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">  {category.toUpperCase()} </h2>

          <div className="category-products">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
