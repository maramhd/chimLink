import React, { useState, useEffect } from "react";
import AlertCard from "../components/AlertCard";

const STORAGE_KEY = "chemline_alerts";

export default function Alerts() {
  // يمكن إضافة بيانات وهمية أو استرجاع من localStorage
  const [alerts, setAlerts] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [
        { id: 1, type: "expiring", title: "Material Expiring Soon", message: "Ethanol 95% will expire on 2025-12-10", date: "2025-12-10" },
        { id: 2, type: "lowStock", title: "Low Stock Alert", message: "Sulfuric Acid quantity below minimum threshold", date: "2025-11-07" },
        { id: 3, type: "newResult", title: "New Experiment Results", message: "DNA Extraction completed", date: "2025-11-06" },
      ];
    } catch {
      return [];
    }
  });

  // حفظ التغييرات في localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alerts));
  }, [alerts]);

  return (
    <div className="app-container">
      <h2>Laboratory Alerts</h2>
      <div className="alerts-list">
        {Array.isArray(alerts) && alerts.map(a => a && <AlertCard key={a.id} alert={a} />)}
      </div>
    </div>
  );
}
