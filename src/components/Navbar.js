import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountDropdown from "./AccountDropdown";
import LOGO from "../assets/images/LOGO.png";

export default function Navbar({ user, setUser }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-wrap">
        <img src={LOGO} alt="ChemLine" className="logo-img" />
        <h2 className="logo-text">ChemLine</h2>
      </div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/experiments" className={`nav-link ${location.pathname === "/experiments" ? "active" : ""}`} onClick={() => setOpen(false)}>Experiments</Link>
        <Link to="/materials" className={`nav-link ${location.pathname === "/materials" ? "active" : ""}`} onClick={() => setOpen(false)}>Materials</Link>
        <Link to="/alerts" className={`nav-link ${location.pathname === "/alerts" ? "active" : ""}`} onClick={() => setOpen(false)}>Alerts</Link>
        <Link to="/guidelines" className={`nav-link ${location.pathname === "/guidelines" ? "active" : ""}`} onClick={() => setOpen(false)}>Guidelines</Link>
        <Link to="/settings" className={`nav-link ${location.pathname === "/settings" ? "active" : ""}`} onClick={() => setOpen(false)}>Settings</Link>

      <a
          href="https://maramhd.github.io/alhaddadprotofolio/contactt.html"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        {/* user display on nav (desktop) */}
        <div style={{ marginLeft: 12 }}>
          {user ? <AccountDropdown user={user} setUser={setUser} /> : <Link to="/login" className="nav-link">Login</Link>}
        </div>
      </nav>

      <div className="hamburger" onClick={() => setOpen(o => !o)}>
        <div></div><div></div><div></div>
      </div>
    </header>
  );
}
