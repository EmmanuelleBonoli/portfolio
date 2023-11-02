import { Chrono } from "react-chrono";


const FriseChrono = () => {

    const items = [{
        title: "2014 - 2023",
        cardTitle: "Analyste Financière",
        cardSubtitle:"Banque de France",
        cardDetailedText: "Audit financier et analyse de marché de plusieurs centaines de groupes français, mais aussi réalisation d'entretiens auprès des dirigeants. Mon expertise m'a conduite à former de nombreux collègues.",
        media: {
          type: "IMAGE",
          source: {
            url: "../../public/images/logoBDF.webp"
          }
        }
      },
      {
        title: "2023 - 2024",
        cardTitle: "Formation certifiante Développement Web",
        cardSubtitle:"Wild Code School",
        cardDetailedText: "Réalisation de plusieurs projets professionnalisant (voir rubrique dédiée). Au terme de la formation, je serais amenée à maitriser Javascript, React.js, Express, Node.js, MySQL, CSS et HTML.",
          media: {
            type: "IMAGE",
            source: {
              url: "../../public/images/logoWCS.png"
            }
          }
      },
      {
        title: "février2024 - ???",
        cardTitle: "Développeuse Web Fullstack",
        cardSubtitle:"Et si ma prochaine expérience se passait au sein de votre entreprise ?",
        cardDetailedText: "En recherche active d'un stage (pouvant aller de 2 à 6mois) ET/OU d'une alternance (1an). Je suis prête à m'investir pleinement au sein de l'entreprise qui me fera confiance, aussi bien dans les projets qui me seront confiés que l'apprentissage si nécessaire de nouveaux langages et/ou frameworks! ",
          media: {
            type: "IMAGE",
            source: {
              url: "../../public/images/votreLogo.png"
            }
          }
      },
    ];

  return (
    <div className="friseChrono" style={{ width: "90%", height: "70vh", padding: "2%"}}>
    <Chrono  items={items}
          mode="VERTICAL"
          slideShow
          slideItemDuration={3000}
          cardHeight={150}
          cardWidth={600}
          fontSizes={{
            title: "1.1rem"
          }}
          contentDetailsHeight={150}
          theme={{
            primary: "var(--light-color)",
            secondary: "var(--dark-color)",
            cardBgColor: "var(--third-color)",
            titleColor: 'black',
            titleColorActive: 'var(--third-color-light)',
          }}/>
  </div>
  );
};

export default FriseChrono;
