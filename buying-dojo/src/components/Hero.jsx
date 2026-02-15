import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>
        Stop searching. Buy the right <br /> tech.
      </h1>

      <p>
        Hand-picked top products across categories — no fluff, no
        sponsorships.
      </p>

      <div className="hero-actions">

        <button
          className="btn outline"
          onClick={() => navigate("/personalizedpick/mobiles")}
        >
          Personalized Pick — ₹299
        </button>
      </div>

      <div className="hero-images">
        <img src="https://cdn.mos.cms.futurecdn.net/CjhaHPrrBpAkc57jJLmoPD.jpg" />
        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853" />
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
      </div>
    </section>
  );
};

export default Hero;
