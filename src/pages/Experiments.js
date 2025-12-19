import React, { useState, useEffect } from "react";
import ExperimentCard from "../components/ExperimentCard";
import ph1 from "../assets/images/ph1.png";
import ph2 from "../assets/images/ph2.jpg";

const STORAGE_KEY = "chemline_experiments";

export default function Experiments({ user }) {

  // صلاحيات المستخدم
  const canEdit = user?.accountType !== "Visitor";

  const [experiments, setExperiments] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: 1,
            title: "pH Level Analysis",
            desc: "Testing pH levels of solutions",
            status: "success",
            image: ph1,
          },
          {
            id: 2,
            title: "Copper Sulfate Test",
            desc: "Detecting water via copper sulfate",
            status: "failed",
            image: ph2,
          },
        ];
  });

  const [newExp, setNewExp] = useState({
    title: "",
    desc: "",
    status: "success",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(experiments));
  }, [experiments]);

  const addExperiment = (e) => {
    e.preventDefault();
    if (!newExp.title || !newExp.desc)
      return alert("Title and description are required");

    setExperiments([
      { id: Date.now(), ...newExp },
      ...experiments, // تظهر التجارب الجديدة بالأعلى
    ]);

    setNewExp({ title: "", desc: "", status: "success", image: "" });
  };

  const updateExperiment = (id, imageUrl) => {
    if (!canEdit) return;
    setExperiments(
      experiments.map((exp) =>
        exp.id === id ? { ...exp, image: imageUrl } : exp
      )
    );
  };

  const deleteExperiment = (id) => {
    if (!canEdit) return;
    if (window.confirm("Are you sure you want to delete this experiment?")) {
      setExperiments(experiments.filter((exp) => exp.id !== id));
    }
  };

  return (
    <div className="exp-wrapper">
      <h1 className="exp-title">Laboratory Experiments</h1>

      {/* ملاحظة للزائر */}
      {!canEdit && (
        <p className="visitor-note">
          You are browsing as <strong>Visitor</strong>. Editing is disabled.
        </p>
      )}

      {/* عرض التجارب */}
      <div className="exp-grid">
        {experiments.map((exp) => (
          <ExperimentCard
            key={exp.id}
            experiment={exp}
            canEdit={canEdit}
            updateExperiment={updateExperiment}
            deleteExperiment={deleteExperiment}
          />
        ))}
      </div>

      {/* إضافة تجربة (لغير الزائر فقط) */}
      {canEdit && (
        <form className="add-exp-form" onSubmit={addExperiment}>
          <h3>Add New Experiment</h3>

          <input
            placeholder="Experiment Title"
            value={newExp.title}
            onChange={(e) =>
              setNewExp({ ...newExp, title: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Description"
            value={newExp.desc}
            onChange={(e) =>
              setNewExp({ ...newExp, desc: e.target.value })
            }
            required
          />

          <select
            value={newExp.status}
            onChange={(e) =>
              setNewExp({ ...newExp, status: e.target.value })
            }
          >
            <option value="success">Success</option>
            <option value="failed">Failed</option>
          </select>

          <label className="add-image-btn">
            Add Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setNewExp({ ...newExp, image: url });
                }
              }}
            />
          </label>

          {newExp.image && (
            <div className="preview-image">
              <img src={newExp.image} alt="preview" />
            </div>
          )}

          <button className="add-btn">Add Experiment</button>
        </form>
      )}
    </div>
  );
}
