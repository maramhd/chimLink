import React, { useState } from "react";
import "./../App.css";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

// صور افتراضية
import ph1 from "../ph1.png";
import ph2 from "../ph2.jpg";

function Experiments() {
  const [experiments, setExperiments] = useState([
    {
      id: 1,
      title: "pH Level Analysis",
      desc: "Testing pH levels of various solutions",
      status: "success",
      image: ph1,
    },
    {
      id: 2,
      title: "Detecting water using copper sulfate",
      desc: "Heat white copper sulfate powder until it turns white (anhydrous).",
      status: "success",
      image: ph2,
    },
  ]);

  const [newExp, setNewExp] = useState({
    title: "",
    desc: "",
    status: "success",
    imageURL: "",
  });

  // رفع صورة
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewExp({
        ...newExp,
        imageURL: URL.createObjectURL(file),
      });
    }
  };

  // إضافة تجربة
  const addExperiment = () => {
    if (!newExp.title || !newExp.desc || !newExp.imageURL) {
      alert("Please fill all fields.");
      return;
    }

    const newItem = {
      id: Date.now(),
      ...newExp,
    };

    setExperiments([...experiments, newItem]);

    setNewExp({
      title: "",
      desc: "",
      status: "success",
      imageURL: "",
    });
  };

  // حذف
  const deleteExperiment = (id) => {
    setExperiments(experiments.filter((exp) => exp.id !== id));
  };

  // مودال العرض
  const [selected, setSelected] = useState(null);

  // مودال التعديل
  const [editMode, setEditMode] = useState(false);
  const [editExp, setEditExp] = useState(null);

  const saveEdit = () => {
    setExperiments(
      experiments.map((exp) =>
        exp.id === editExp.id ? editExp : exp
      )
    );
    setEditMode(false);
  };

  return (
    <div className="exp-wrapper">
      <h1 className="exp-title">Laboratory Experiments</h1>

      {/* Form */}
      <div className="add-exp-form">
        <h2>Add New Experiment</h2>

        <input
          type="text"
          placeholder="Experiment Title"
          value={newExp.title}
          onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={newExp.desc}
          onChange={(e) => setNewExp({ ...newExp, desc: e.target.value })}
        />

        <select
          value={newExp.status}
          onChange={(e) => setNewExp({ ...newExp, status: e.target.value })}
        >
          <option value="success">Successful ✔</option>
          <option value="failed">Failed ✖</option>
        </select>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {newExp.imageURL && (
          <img src={newExp.imageURL} className="preview-img" alt="" />
        )}

        <button className="add-exp-btn" onClick={addExperiment}>
          + Add Experiment
        </button>
      </div>

      {/* Experiments */}
      <div className="exp-grid">
        {experiments.map((exp) => (
          <div className="exp-card" key={exp.id}>

            {/* صورة نصف الكرت */}
            <div
              className="exp-card-image"
              style={{
                backgroundImage: `url(${exp.imageURL || exp.image})`,
              }}
            ></div>

            {/* الأكشن */}
            <div className="card-actions">
              <button onClick={() => setSelected(exp)}>
                <FaEye />
              </button>

              <button
                onClick={() => {
                  setEditExp(exp);
                  setEditMode(true);
                }}
              >
                <FaEdit />
              </button>

              <button onClick={() => deleteExperiment(exp.id)}>
                <FaTrash />
              </button>
            </div>

            {/* النص */}
            <div className="exp-card-content">
              <h3>{exp.title}</h3>

              <span className={`status-tag ${exp.status}`}>
                {exp.status === "success" ? "✔ Successful" : "✖ Failed"}
              </span>

              <button className="view-btn" onClick={() => setSelected(exp)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* مودال العرض */}
      {selected && (
        <div className="exp-modal-overlay" onClick={() => setSelected(null)}>
          <div className="exp-modal">
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <span className={`status-tag ${selected.status}`}>
              {selected.status === "success" ? "✔ Successful" : "✖ Failed"}
            </span>
            <button className="close-modal" onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* مودال التعديل */}
      {editMode && (
        <div className="exp-modal-overlay" onClick={() => setEditMode(false)}>
          <div
            className="exp-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Edit Experiment</h2>

            <input
              type="text"
              value={editExp.title}
              onChange={(e) =>
                setEditExp({ ...editExp, title: e.target.value })
              }
            />

            <textarea
              value={editExp.desc}
              onChange={(e) =>
                setEditExp({ ...editExp, desc: e.target.value })
              }
            />

            <select
              value={editExp.status}
              onChange={(e) =>
                setEditExp({ ...editExp, status: e.target.value })
              }
            >
              <option value="success">Successful ✔</option>
              <option value="failed">Failed ✖</option>
            </select>

            <button className="add-exp-btn" onClick={saveEdit}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experiments;
