import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarLinks">Home</Link>
      <Link to="/items" className="navbarLinks">Items</Link>
      <Link to="/authors" className="navbarLinks">Authors</Link>
    </nav>
  );
}
