const Interests = () => {
  return (
    <div className="interests">
      {/* <div className="block"> */}
        <div className="asso">
          <img src="../../public/images/projet.png" alt="Asso" />
          <div className="descAsso">
            <h3>Vie Associative</h3>
            <p>{`Trésorière et membre du conseil d'administration du CEC Moulin Gautron (330 adhérents)`}</p>
          </div>
        </div>
        <div className="draw">
          <img src="../../public/images/dessin-2.png" alt="Dessin" />
          <div>
            <h3>DESSIN/ DIGITAL PAINTING</h3>
            <p>{`Déplacement au festival International de la BD d'Angoulême`}</p>
            <p>Participation au challenge Inktober</p>
          </div>
        {/* </div> */}
        </div>
        {/* <div className="block"> */}
        <div className="tennis">
          <img src="../../public/images/tennis-2.png" alt="Tennis" />
        </div>
        <div className="code">
          <img src="../../public/images/developeur.png" alt="Développeur" />
        </div>
        {/* </div> */}
    </div>
  );
};

export default Interests;
