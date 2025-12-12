import React from "react";

export default function FeatureCard({ icon, title, desc, color = "blue" }) {
  return (
    <div className={`feature-card ${color}`}>
      <div className={`icon ${color}-icon`}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
