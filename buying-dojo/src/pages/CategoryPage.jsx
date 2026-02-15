// src/pages/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();
  const filtered = products.filter((p) => p.category.toLowerCase() === category);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
