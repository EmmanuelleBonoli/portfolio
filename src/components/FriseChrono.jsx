import { Chrono } from "react-chrono";

const FriseChrono = () => {
  const items = [
    {
      title: "14 - 23",
      cardTitle: "Analyste Financière",
      cardSubtitle: "Banque de France",
      cardDetailedText:
        "Audit financier et analyse de marché de plusieurs centaines de groupes, réalisation d'entretiens auprès des dirigeants. Mon expertise m'a conduite à former de nombreux collègues.",
      media: {
        type: "IMAGE",
        source: {
          url: "../../images/logoBDF.webp",
        },
      },
    },
    {
      title: "23 - 24",
      cardTitle: "Formation certifiante Développement Web",
      cardSubtitle: "Wild Code School",
      cardDetailedText:
        "Réalisation de plusieurs projets professionnalisant (voir rubrique dédiée). Au terme de la formation, je serais amenée à maitriser Javascript, React.js, Express, Node.js, MySQL, CSS et HTML.",
      media: {
        type: "IMAGE",
        source: {
          url: "../../images/logoWCS.png",
        },
      },
    },
    {
      title: "fév 24 - ???",
      cardTitle: "Développeuse Web Fullstack",
      cardSubtitle:
        "Et si ma prochaine expérience se passait au sein de votre entreprise ?",
      cardDetailedText:
        "En recherche active d'un stage (de 2 à 6mois) ET/OU d'une alternance (1an). Je suis prête à m'investir pleinement au sein de l'entreprise qui me fera confiance! ",
      media: {
        type: "IMAGE",
        source: {
          url: "../../images/votreLogo.png",
        },
      },
    },
  ];

  return (
    <div
      className="friseChrono"
      style={{ width: "100%", height: "70vh", padding: "1%" }}
    >
      <Chrono
        items={items}
        mode="VERTICAL"
        slideShow
        slideItemDuration={3000}
        cardHeight={200}
        cardWidth={650}
        fontSizes={{
          title: "1rem",
          cardSubtitle: '1rem',
        }}
        contentDetailsHeight={250}
        theme={{
          primary: "var(--dark-color)",
          secondary: "var(--dark-color)",
          cardBgColor: "var(--light-color)",
          titleColor: "black",
          titleColorActive: "var(--third-color-light)",
        }}
      />
    </div>
  );
};

export default FriseChrono;
