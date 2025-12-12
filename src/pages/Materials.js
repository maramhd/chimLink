import React, { useState } from "react";

export default function Materials() {
  const [materials] = useState([
    { name: "Hydrochloric Acid", quantity: "2.5L", expiration: "2026-03-15", hazard: "High", status: "Valid" },
    { name: "Ethanol 95%", quantity: "1L", expiration: "2025-12-10", hazard: "Medium", status: "Expiring Soon" },
    { name: "Glucose", quantity: "2kg", expiration: "2028-01-15", hazard: "Low", status: "Valid" },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = materials.filter(mat => {
    const q = search.toLowerCase();
    const matchSearch = mat.name.toLowerCase().includes(q);
    const matchFilter = filter === "All" || mat.hazard === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="materials-page">
      <h2>Chemical Materials</h2>

      <div className="search-filter">
        <input
          placeholder="Search materials..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All Hazard Levels</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <table className="materials-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Expiration</th>
            <th>Hazard</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((m, i) => (
            <tr key={i} className={m.status === "Expiring Soon" ? "expiring" : ""}>
              <td>{m.name}</td>
              <td>{m.quantity}</td>
              <td>{m.expiration}</td>

              <td className={`hazard ${m.hazard.toLowerCase()}`}>
                {m.hazard}
              </td>

              <td className={m.status === "Valid" ? "valid" : "expiring-status"}>
                {m.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
