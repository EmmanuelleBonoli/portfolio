import {NavLink} from "react-router-dom";


const Header = () => {

  return (
    <div className="header">
      <div className="presentation">
        <img className="photoCV" src="../public/images/photoCVEBonoli.png" alt="photo E BONOLI" />
        <p> Emmanuelle BONOLI</p>
      </div>
      <div className="links">
          <div className="menu-items">
            <NavLink to="#home">Accueil</NavLink>
            <NavLink to="#projetsdeveloppes">Projets développés</NavLink>
            <NavLink to="#monprofil">Mon profil</NavLink>
            <NavLink to="#contact">Contact</NavLink>
          </div>
      </div>
    </div>
  );
};

export default Header;
