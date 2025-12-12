import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("Personal");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name: name.trim() || "User", accountType, plan: "Free" };
    setUser(payload);
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome to ChemLine</h2>
        <label>Name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
        <label>Account Type</label>
        <select value={accountType} onChange={e => setAccountType(e.target.value)}>
          <option value="University">University</option>
          <option value="Personal">Personal</option>
          <option value="Visitor">Visitor / Explorer</option>
        </select>
        <button className="login-btn" type="submit">Enter ChemLine</button>
      </form>
    </div>
  );
}
