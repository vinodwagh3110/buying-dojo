import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const categories = ["IEMs", "Mobiles", "Laptops", "Audio", "Wearables"];

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Buying Dojo</h1>

      <div className="navbar-links">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/category/${cat.toLowerCase()}`}
            className="nav-link"
          >
            {cat}
          </Link>
        ))}

        <Link
          to="/personalizedpick/iems"
          className="personalized-btn"
        >
          Get Personalized Pick — ₹299
        </Link>
      </div>
    </nav>
  );
}
