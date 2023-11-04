import PropTypes from "prop-types";

const ProjectCard = ({
  image,
  image2,
  name,
  context,
  length,
  type,
  stack,
  description,
  link,
  github,
}) => {
  return (
    <div className="cardProject">
      <div className="first-content">
        <img src={image} className="illuProject" alt="image du projet" />
        <div className="learn-more">
          <h1>{name}</h1>
          {stack}
          <div className="moreInfos">{`Plus d'infos >`}</div>
        </div>
      </div>

      <div className="second-content">
        <div className="topProjectCard">
          <div className="illu2nd">
            <img className="illu2ndprojet" src={image2} alt="image du projet" />
          </div>
          <div className="detailsProject">
            <h1>{name}</h1>
            <div>Réalisation : {context}</div>
            <div>Durée du projet : {length}</div>
            <div>Type : {type}</div>
            <div>Stack Technique : {stack}</div>
          </div>
        </div>
        <div className="bottomProjectCard">
          <div className="descProject">Description : {description}</div>
          <div className="linkProject">
            <div className="partWeb">
              Lien vers le site :
              {link === "à venir" ? (
                <p className="buttonFuture">à venir</p>
              ) : link === "vous y êtes! :)" ? (
                <p className="buttonFuture"> Vous y êtes ! </p>
              ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button>
                    <img
                      className="logoInternet"
                      src="../images/site-internet-blanc.png"
                      alt="logo site internet"
                    />
                  </button>
                </a>
              )}
            </div>
            <div className="partWeb">
              Voir le code :
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button>
                  <img
                    className="logoInternet"
                    src="../images/github.png"
                    alt="Logo Github"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectCard;
