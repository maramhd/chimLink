import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AccountDropdown({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="account-dropdown" ref={ref}>
      <button className="account-btn" onClick={() => setOpen(o => !o)}>
        {user.name} ▾
      </button>
      {open && (
        <div className="account-menu">
          <div className="account-item"><strong>{user.name}</strong></div>
          <div className="account-item small">Type: {user.accountType}</div>
          <Link to="/settings" className="account-item" onClick={() => setOpen(false)}>Settings</Link>
          <button className="account-item danger" onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
