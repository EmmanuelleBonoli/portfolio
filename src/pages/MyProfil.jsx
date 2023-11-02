import { useState } from "react";
import Competences from "../components/Competences";
import FriseChrono from "../components/FriseChrono";
import Interests from "../components/Interests";

const MyProfil = () => {
  const [filtreActif, setFiltreActif] = useState("Filtre1");
  function handleFiltre(filtre) {
    setFiltreActif(filtre);
  }

  return (
    <div className="myProfil">
      <div className="detailsProfil">
        <div className="filterProfil">
          <label className="filters">
            <input type="radio" name="radio" defaultChecked />
            <span
              className={`compProfil ${
                filtreActif === "Filtre1" ? "active" : ""
              }`}
              onClick={() => handleFiltre("Filtre1")}
            >
              Compétences
            </span>
          </label>
          <label className="filters">
            <input type="radio" name="radio" />
            <span
              className={`expProfil ${
                filtreActif === "Filtre2" ? "active" : ""
              }`}
              onClick={() => handleFiltre("Filtre2")}
            >
              Expériences Professionnelles
            </span>
          </label>
          <label className="filters">
            <input type="radio" name="radio" />
            <span
              className={`otherProfil ${
                filtreActif === "Filtre3" ? "active" : ""
              }`}
              onClick={() => handleFiltre("Filtre3")}
            >{`Centres d'intérets`}</span>
          </label>
        </div>
        <div className="descProfil">
          {filtreActif === "Filtre1" && (
            <Competences/>
          )}
          {filtreActif === "Filtre2" && (
            <FriseChrono/>
          )}
          {filtreActif === "Filtre3" && (
            <Interests/>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfil;
