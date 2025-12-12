import React, { useState, useEffect } from "react";
import { FaEye, FaTrash, FaPlus } from "react-icons/fa";

export default function ExperimentCard({ experiment, updateExperiment, deleteExperiment }) {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50);
  }, []);

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateExperiment(experiment.id, url);
    }
  };

  return (
    <div className={`exp-card ${animate ? "slide-in-left" : ""}`}>
      <div
        className="exp-card-image"
        style={{ backgroundImage: `url(${experiment.image})` }}
      >
        <div className="card-icons">
          <button
            className="icon-btn"
            onClick={() => setShowModal(true)}
            title="View Experiment"
          >
            <FaEye />
          </button>
          <button
            className="icon-btn"
            onClick={() => deleteExperiment(experiment.id)}
            title="Delete"
          >
            <FaTrash />
          </button>
          <label className="icon-btn" title="Add Image">
            <FaPlus />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>

      <div className="exp-card-content">
        <h3>{experiment.title}</h3>
        <p>{experiment.desc}</p>
        <span className={`status-tag ${experiment.status}`}>
          {experiment.status === "success" ? "✔ Successful" : "✖ Failed"}
        </span>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{experiment.title}</h3>
            <p>{experiment.desc}</p>
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
