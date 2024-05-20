import { Chrono } from "react-chrono";

const FriseChrono = () => {
  const items = [
    {
      title: "2024",
      cardTitle: "Stage de 6mois en tant que Développeuse Web Fullstack",
      // cardSubtitle:
      //   "Code Lutin",
      cardDetailedText:
        "Migration frontend et backend d'une application, recueil de besoins et développement de nouvelles fonctionnalités. Au terme de ce stage, de nouvelles compétences seront acquises comme la maitrise du backend en Java ainsi que l'outil Docker. ",
      media: {
        type: "IMAGE",
        source: {
          url: "../../images/logoCodeLutin.png",
        },
      },
    },
   
    {
      title: "23 - 24",
      cardTitle: "Formation certifiante Développement Web",
      // cardSubtitle: "Wild Code School",
      cardDetailedText:
        "Réalisation de plusieurs projets professionnalisant (voir rubrique dédiée). La formation m'a conduite à maitriser Javascript, React.js, Express, Node.js, MySQL, CSS et HTML.",
      media: {
        type: "IMAGE",
        source: {
          url: "../../images/logoWCS.png",
        },
      },
    },
    {
      title: "14 - 23",
      cardTitle: "Analyste Financière",
      // cardSubtitle: "Banque de France",
      cardDetailedText:
        "Audit financier et analyse de marché de plusieurs centaines de groupes, réalisation d'entretiens auprès des dirigeants. Mon expertise m'a conduite à former de nombreux collègues.",
      media: {
        type: "IMAGE",
        source: {
          url: "../../images/logoBDF.webp",
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
