import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio — Hadil BEN SOUSSIA</h1>

      <div className="nav-links">
        
        <NavLink to="/" className="nav-item">
          Accueil
        </NavLink>

        <NavLink to="/projects" className="nav-item">
          Projets
        </NavLink>

        <NavLink to="/skills" className="nav-item">
          Compétences
        </NavLink>

        <NavLink to="/cv" className="nav-item">
          CV
        </NavLink>

        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>

      </div>
    </nav>
  );
}
