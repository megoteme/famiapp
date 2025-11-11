import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu state

  return (
    <nav className="navbar">
      <h2 className="logo">FamiApp</h2>

      {/* Hamburger menu icon */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
