// src/components/ProductCard.jsx
import React, { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  const visiblePros = expanded ? product.pros : product.pros.slice(0, 3);
  const visibleCons = expanded ? product.cons : product.cons.slice(0, 2);

  const shouldShowToggle =
    product.pros.length > 3 || product.cons.length > 2;

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* Title */}
      <h3 className="product-name">{product.name}</h3>

      {/* Price */}
      <p className="product-price">{product.priceRange}</p>

      {/* Rating */}
      <span className="product-rating">{product.rating}/10</span>

      {/* Pros & Cons */}
      <ul className="product-list">
        {visiblePros.map((pro, idx) => (
          <li key={`pro-${idx}`} className="pro">
            ✓ {pro}
          </li>
        ))}

        {visibleCons.map((con, idx) => (
          <li key={`con-${idx}`} className="con">
            ✕ {con}
          </li>
        ))}
      </ul>

      {/* Read more */}
      {shouldShowToggle && (
        <button
          className="read-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* Action buttons */}
      <div className="product-actions">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn amazon"
        >
          Amazon
        </a>

        <a
          href={product.flipkartUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flipkart"
        >
          Flipkart
        </a>
      </div>
    </div>
  );
}
