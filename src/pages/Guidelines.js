import React, { useState } from "react";

// استيراد الصور الثلاثة الأساسية
import p1 from "../assets/images/p1.jfif";
import p2 from "../assets/images/p2.jfif";
import f from "../assets/images/f.jfif";

export default function Guidelines() {
  const [images, setImages] = useState([]);

  const uploadImg = e => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImages([...images, url]);
  };

  return (
    <div className="page-container">

      <h1 className="title">Laboratory Safety Guidelines</h1>
      <p className="subtitle">Professional safety procedures and visual instruction cards.</p>

      {/* GRID WITH IMAGE CARDS */}
      <div className="guidelines-grid">

        <div className="guideline-card">
          <div className="g-img" style={{ backgroundImage: `url(${p1})` }}></div>
          <h3>PPE</h3>
          <p>Wear goggles, gloves & coat.</p>
        </div>

        <div className="guideline-card">
          <div className="g-img" style={{ backgroundImage: `url(${p2})` }}></div>
          <h3>Chemical Handling</h3>
          <p>Review SDS and store properly.</p>
        </div>

        <div className="guideline-card">
          <div className="g-img" style={{ backgroundImage: `url(${f})` }}></div>
          <h3>Fire Safety</h3>
          <p>Know extinguisher locations.</p>
        </div>

      </div>

      {/* USER UPLOADED SAFETY POSTERS */}
      <h2 className="section-title">Safety Posters</h2>

      <label className="upload-label">
        Upload Poster
        <input type="file" accept="image/*" onChange={uploadImg} className="upload-input" />
      </label>

      <div className="uploaded-grid">
        {images.map((src, i) => (
          <img key={i} src={src} className="uploaded-img" alt="poster" />
        ))}
      </div>

    </div>
  );
}
