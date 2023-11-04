const Contact = () => {
  const email = "ebonoli@hotmail.fr";
  const githubLink = "https://github.com/EmmanuelleBonoli";
  const linkedinLink = "https://www.linkedin.com/in/emmanuellebonoli";

  return (
    <div className="contact">
      <div className="cardContact">
        <div className="firstPartContact">
          <h2>Emmanuelle BONOLI</h2>
          <img
            className="myself"
            src="../../images/photoCVEBonoli.png"
            alt="Emmanuelle BONOLI"
          />
        </div>
        <div className="socialNetworks">
          <h3>{`N'hésitez pas à me contacter via les liens ci-dessous`}</h3>
          <div>
            <a href={`mailto:${email}`}>
              <img
                className="mail"
                src="../../images/email-blanc.png"
                alt="logo Mail"
              />
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                className="github"
                src="../../images/github.png"
                alt="logo GitHub"
              />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img
                className="linkedin"
                src="../../images/linkedin-3-blanc.png"
                alt="logo LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
