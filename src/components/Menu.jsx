import { NavLink } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false);
  };
  const handleCloseNav = () => {
    closeMenu();
  };

  return (
    <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="presentation">
        <img
          className="photoCV"
          src="../images/photoCVEBonoli.png"
          alt="photo E BONOLI"
        />
        <p> Emmanuelle BONOLI</p>
      </div>
      <div className="navbar-links">
        <div className="navbar-items slideInDown-1">
          <NavLink to="#home" className="navbar-link" onClick={handleCloseNav}>
            Accueil
          </NavLink>
        </div>
        <div className="navbar-items slideInDown-2">
          <NavLink
            to="#projetsdeveloppes"
            className="navbar-link"
            onClick={handleCloseNav}
          >
            Projets développés
          </NavLink>
        </div>
        <div className="navbar-items slideInDown-3">
          <NavLink
            to="#monprofil"
            className="navbar-link"
            onClick={handleCloseNav}
          >
            Mon profil
          </NavLink>
        </div>
        <div className="navbar-items slideInDown-4">
          <NavLink
            to="#contact"
            className="navbar-link"
            onClick={handleCloseNav}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <button type="button" className="nav-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
};

export default Menu;
