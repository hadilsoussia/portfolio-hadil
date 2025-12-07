import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  
  const isProjectPage = () => {
    const currentPath = location.pathname;
    return (
      currentPath === "/projects" ||
      currentPath === "/cap-projet" ||
      currentPath === "/esieabot"
      
    );
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio — Hadil BEN SOUSSIA</h1>

      <div className="nav-links">
        
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Accueil
        </NavLink>

        <NavLink 
          to="/projects" 
          className={
            isProjectPage() ? "nav-item active" : "nav-item"
          }
        >
          Projets
        </NavLink>

        <NavLink 
          to="/skills" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Compétences
        </NavLink>

        <NavLink 
          to="/cv" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          CV
        </NavLink>

        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Contact
        </NavLink>

      </div>
    </nav>
  );
}