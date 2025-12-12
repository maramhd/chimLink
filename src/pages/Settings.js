import React, { useState } from "react";

export default function Settings({ user, setUser }) {
  const [name, setName] = useState(user.name);
  const [accountType, setAccountType] = useState(user.accountType);

  const plans = [
    {
      id: 1,
      title: "Free",
      desc: "Personal usage only",
      features: ["Basic experiments", "Access to materials", "No cloud export", "No team access"],
      price: "Free",
      type: "current"
    },
    {
      id: 2,
      title: "University",
      desc: "For academic institutions",
      features: ["Multi-user support", "Inventory export", "Priority support", "Unlimited experiments"],
      price: "$99 / month",
      type: "upgrade"
    },
    {
      id: 3,
      title: "Explorer",
      desc: "For visitors & researchers",
      features: ["Read-only experiments", "Browse materials", "Download guidelines", "No editing"],
      price: "$9 / month",
      type: "upgrade"
    }
  ];

  const handleSave = () => {
    if (!name.trim()) return alert("Name cannot be empty");
    setUser({ ...user, name, accountType });
    alert("Profile updated successfully!");
  };

  return (
    <div className="settings-container">
      <h2 className="page-title">Settings & Profile</h2>

      {/* PROFILE SECTION */}
      <div className="grid">
        <div className="card">
          <h3>Profile Information</h3>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <label>Account Type</label>
          <select value={accountType} onChange={e => setAccountType(e.target.value)}>
            <option value="University">University</option>
            <option value="Personal">Personal</option>
            <option value="Visitor">Visitor / Explorer</option>
          </select>
          <button className="edit-btn" onClick={handleSave}>Save Changes</button>
        </div>

        {/* SUBSCRIPTION PLANS */}
        <div className="card">
          <h3>Subscription Plans</h3>
          <div className="plans-grid">
            {plans.map(plan => (
              <div key={plan.id} className={`plan-card ${plan.type === "upgrade" ? "" : "current-plan"}`}>
                {plan.type === "upgrade" && plan.title === "University" && <div className="tag">Popular</div>}
                <h4>{plan.title}</h4>
                <p>{plan.desc}</p>
                <ul>
                  {plan.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                </ul>
                <span className="price-tag">{plan.price}</span>
                <button className={`plan-btn ${plan.type === "upgrade" ? "highlight" : ""}`}>
                  {plan.type === "upgrade" ? "Upgrade" : "Current Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
