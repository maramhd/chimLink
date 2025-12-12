import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

/* components */
import Navbar from "./components/Navbar";

/* pages */
import Home from "./pages/Home";
import Experiments from "./pages/Experiments";
import Materials from "./pages/Materials";
import Alerts from "./pages/Alerts";
import Guidelines from "./pages/Guidelines";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

/* assets */
import LOGO from "./assets/images/LOGO.png";

const STORAGE_KEY = "chemline_user";

function App() {
  // load user from localStorage
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  });

  // persist user to localStorage
  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

  // inject favicon dynamically from LOGO (since file is in /src)
  useEffect(() => {
    const existing = document.querySelector("link[rel='shortcut icon']");
    if (existing) existing.remove();
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.type = "image/png";
    link.href = LOGO;
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
