import React from "react";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import { RiFlaskLine } from "react-icons/ri";
import { GiChemicalDrop, GiAtom } from "react-icons/gi";
import { MdOutlineWarningAmber } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";

export default function Home({ user }) {
  return (
    <>

      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="hero-bg">
        <div className="hero-bg-overlay"></div>
        <div className="hero-bg-content">
          <h1>Welcome to ChemLine</h1>
          <p>
            Smart Laboratory Management for universities, researchers and personal exploration.
          </p>
          <a href="/experiments" className="hero-btn-lg">Explore Experiments</a>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Hello, {user.name}</h2>
          <p>
            ChemLine centralizes your laboratory workflow by managing experiments, chemicals, and safety
            procedures in one unified platform.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">Main Platform Features</h2>
        <div className="card-container">
          <FeatureCard icon={<RiFlaskLine />} title="Experiments" desc="Record experiments and results." color="blue" />
          <FeatureCard icon={<GiChemicalDrop />} title="Materials" desc="Track chemical inventory and expiration." color="green" />
          <FeatureCard icon={<MdOutlineWarningAmber />} title="Alerts" desc="Real-time warnings and safety notices." color="red" />
          <FeatureCard icon={<BiBookContent />} title="Guidelines" desc="View & upload safety procedures." color="purple" />
        </div>
      </section>

      {/* METHODS OF REACTION */}
      <section className="reaction-section">
        <h2>Chemical Reaction Methods</h2>
        <div className="reaction-grid">
          <div className="reaction-card">
            <div className="reaction-icon"><GiAtom /></div>
            <h3>Combustion</h3>
            <p>Rapid reaction with oxygen producing heat & light.</p>
          </div>
          <div className="reaction-card">
            <div className="reaction-icon"><RiFlaskLine /></div>
            <h3>Neutralization</h3>
            <p>Acid reacts with base to form salt and water.</p>
          </div>
          <div className="reaction-card">
            <div className="reaction-icon"><GiChemicalDrop /></div>
            <h3>Precipitation</h3>
            <p>Two solutions react to form an insoluble product.</p>
          </div>
        </div>
      </section>
{/* SUBSCRIPTION PLANS */}
<section className="plans-section">
  <h2 className="section-title">Subscription Plans</h2>
  <p className="plans-sub">
    Choose the plan that matches your usage. University & Research plans unlock advanced features.
  </p>

  <div className="plans-grid">

    {/* FREE PLAN */}
    <div className="plan-card">
      <h3>Free</h3>
      <p>Personal usage only</p>
      <ul>
        <li>✓ Basic experiments</li>
        <li>✓ Access to materials</li>
        <li>✗ No cloud export</li>
        <li>✗ No team access</li>
      </ul>
      <span className="price-tag">Free</span>
      <button className="plan-btn">Current Plan</button>
    </div>

    {/* UNIVERSITY PLAN */}
    <div className="plan-card popular">
      <div className="tag">Popular</div>
      <h3>University</h3>
      <p>For academic institutions</p>
      <ul>
        <li>✓ Multi-user support</li>
        <li>✓ Inventory export</li>
        <li>✓ Priority support</li>
        <li>✓ Unlimited experiments</li>
      </ul>
      <span className="price-tag">$99 / month</span>
      <button className="plan-btn highlight">Upgrade</button>
    </div>

    {/* EXPLORER PLAN */}
    <div className="plan-card">
      <h3>Explorer</h3>
      <p>For visitors & researchers</p>
      <ul>
        <li>✓ Read-only experiments</li>
        <li>✓ Browse materials</li>
        <li>✓ Download guidelines</li>
        <li>✗ No editing</li>
      </ul>
      <span className="price-tag">$9 / month</span>
      <button className="plan-btn">Choose</button>
    </div>

  </div>
</section>

    </>
  );
}
