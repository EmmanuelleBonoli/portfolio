const Competences = () => {
  return (
    <div className="compArea">
      <div className="competences">
        <div className="frontEnd">
          <h2>Front-End</h2>
          <div className="language">
            <h3>Langages : </h3>
            <div>Javascript, Css, HTML</div>
          </div>
          <div className="env">
            <h3>Environnement technique :</h3>
            <div> ReactJS, ViteJS</div>
          </div>
        </div>
        <div className="backEnd">
          <h2>Back-End</h2>
          <div className="env">
            <h3>Environnement Technique :</h3>
            <div> NodeJS, Express, MySQL </div>
          </div>
        </div>
        <div className="multiEnd">
          <h2>Compétences transversales</h2>
          <div className="divStack">
            <div>
              <h3>Outils :</h3>
              <div>Git, GitHub, VSCode, Figma, Trello... </div>
            </div>
            <div>
              <h3>Autres :</h3>
              <div>Méthode Agile</div>
            </div>
          </div>
        </div>
        <div className="softSkills">
          <h2>Soft-skills</h2>
          <div>Rigueur et Autonomie</div>
          <div>Gestion des priorités</div>
          <div>{`Esprit d'équipe et Adaptabilité`}</div>
          <h3>Langue :</h3>
          <div>
            Anglais :<p>Lu, écrit, compréhension orale : courant</p>
            <p>Parlé : intermédiaire</p>
            <p>{`(TOEIC : 710/990)`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
