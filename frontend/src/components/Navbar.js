import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarLinks">1. Home</Link>
      <Link to="/items" className="navbarLinks ite">2. Items</Link>
      <Link to="/authors" className="navbarLinks aut">3. Authors</Link>
      <Link to="/addActor" className="navbarLinks art">4. Add Actor</Link>
      <Link to="/actors" className="navbarLinks art">4. Actors</Link>
      <Link to="/populatedMovies" className="navbarLinks art">4. PopulatedMovies</Link>
      <Link to="/superHeros" className="navbarLinks">5. SuperHeros</Link>
      <Link to="/addSuperHeros" className="navbarLinks">5. AddSuperHeros</Link>
    </nav>
  );
}
