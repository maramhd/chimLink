import React from "react";
import { FaExclamationTriangle, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

export default function AlertCard({ alert }) {
  // تأكيد أن alert موجود
  if (!alert) return null;

  // تحديد الأيقونة حسب النوع
  const icon =
    alert.type === "expiring" ? (
      <FaExclamationTriangle className="alert-icon red" />
    ) : alert.type === "lowStock" ? (
      <FaExclamationCircle className="alert-icon yellow" />
    ) : (
      <FaCheckCircle className="alert-icon green" />
    );

  
  return (
    <div className={`alert-card ${alert.type || ""}`}>
      <div className="alert-left">
        <div className="icon-box">{icon}</div>

        <div className="alert-content">
          <h4>{alert.title || "Untitled Alert"}</h4>
          <p>{alert.message || ""}</p>
        </div>
      </div>

      <div className="alert-date">{alert.date || ""}</div>
    </div>
  );
}