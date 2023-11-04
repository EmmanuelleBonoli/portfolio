const Interests = () => {
  return (
    <div className="interests">
      <div className="asso">
        <img src="../../images/projet.png" alt="Asso" />
        <div className="descAsso">
          <h3>Vie Associative</h3>
          <p>{`Trésorière et membre du conseil d'administration du CEC Moulin Gautron (330 adhérents)`}</p>
        </div>
      </div>
      <div className="draw">
        <img src="../../images/dessin-2.png" alt="Dessin" />
        <div>
          <h3>Dessin / Digital Painting</h3>
          <p>{`Déplacement au festival International de la BD d'Angoulême`}</p>
          <p>Participation au challenge Inktober</p>
        </div>
      </div>
      <div className="tennis">
        <img src="../../images/tennis-2.png" alt="Tennis" />
        <h3>Tennis</h3>
      </div>
      <div className="code">
        <img src="../../images/developeur.png" alt="Développeur" />
        <h3>Développement web</h3>
      </div>
    </div>
  );
};

export default Interests;
