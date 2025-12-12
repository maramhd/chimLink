import React from "react";
import LOGO from "../assets/images/LOGO.png";

export default function Hero() {
  return (
    <section className="hero-section hero-grad">
      <div className="hero-left">
        <img src={LOGO} alt="ChemLine" className="hero-logo" />
        <h1>ChemLine — Laboratory Management Simplified</h1>
        <p className="hero-sub">
          Centralize experiments, inventory, and safety procedures. Built for researchers, labs and universities.
        </p>
      </div>
      <div className="hero-right">
        <div className="hero-card">
          <h3>Request Demo</h3>
          <p>Try ChemLine for your lab — track experiments, avoid expired chemicals, and simplify safety compliance.</p>
          <a className="hero-btn" href="/experiments">Get Started</a>
        </div>
      </div>
    </section>
  );
}
