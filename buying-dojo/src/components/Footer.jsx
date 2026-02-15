// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-title">Buying Dojo</h2>
          <p className="footer-text">
            Your trusted tech buying guide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li>IEMs</li>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Audio</li>
            <li>Wearables</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">hello@buyingdojo.com</p>
          <span className="stripe-badge">Powered by Stripe</span>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Buying Dojo. All rights reserved.
      </div>
    </footer>
  );
}
