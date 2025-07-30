import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "work",
        date: "2024-2025",
        title: "Alternance Conceptrice Développeuse Web Fullstack",
        subtitle: "Teractys",
        description:
            "Développement de features fullStack sur les différentes applications internes et externes de l’entreprise. Technologies utilisées : Vue.js, Typescript, Node.js, Java, Angular… / Travail en méthode agile avec sprint bimensuel",
        icon: <Briefcase />,
        contentStyle: { background: "#e0f2fe", color: "#1e40af" },
        contentArrowStyle: { borderRight: "7px solid #e0f2fe" },
        iconStyle: { background: "#1e40af", color: "#fff" },
    },
    {
        type: "education",
        date: "2024-2025",
        title: "Formation Développement Web (niv bac+3/4)",
        subtitle: "Wild Code School",
        description:
            "Approfondissement d'Angular, Java, Spring, Hibernate, MySQL. Réalisation de plusieurs projets collaboratifs.",
        icon: <GraduationCap />,
        contentStyle: { background: "#ede9fe", color: "#4c1d95" },
        contentArrowStyle: { borderRight: "7px solid #ede9fe" },
        iconStyle: { background: "#4c1d95", color: "#fff" },
    },
    {
        type: "work",
        date: "2024",
        title: "Stage Développeuse Web Fullstack",
        subtitle: "Code Lutin",
        description:
            "Migration d’une application complète, développement de nouvelles fonctionnalités et recueil de besoins. Découverte approfondie de Java.",
        icon: <Briefcase />,
        contentStyle: { background: "#e0f2fe", color: "#1e40af" },
        contentArrowStyle: { borderRight: "7px solid #e0f2fe" },
        iconStyle: { background: "#1e40af", color: "#fff" },
    },
    {
        type: "education",
        date: "2023-2024",
        title: "Formation Développement Web (niv bac+2)",
        subtitle: "Wild Code School",
        description:
            "Apprentissage de React, Node.js, Express, MySQL. Réalisation de plusieurs projets collaboratifs.",
        icon: <GraduationCap />,
        contentStyle: { background: "#ede9fe", color: "#4c1d95" },
        contentArrowStyle: { borderRight: "7px solid #ede9fe" },
        iconStyle: { background: "#4c1d95", color: "#fff" },
    },
    {
        type: "work",
        date: "2014-2023",
        title: "Analyste Financière",
        subtitle: "Banque de France",
        description:
            "Audit de groupes d’entreprises, entretiens dirigeants, formée à l'analyse financière avancée.",
        icon: <Briefcase />,
        contentStyle: { background: "#fef9c3", color: "#78350f" },
        contentArrowStyle: { borderRight: "7px solid #fef9c3" },
        iconStyle: { background: "#78350f", color: "#fff" },
    },
];

const Timeline = () => {
    return (
        <VerticalTimeline lineColor="#3b82f6">
            {experiences.map(
                ({
                     type,
                     date,
                     title,
                     subtitle,
                     description,
                     icon,
                     contentStyle,
                     contentArrowStyle,
                     iconStyle,
                 }) => (
                    <VerticalTimelineElement
                        key={`${type}-${date}-${title}`}
                        className={`vertical-timeline-element--${type}`}
                        date={date}
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        icon={icon}
                    >
                        <h3 className="vertical-timeline-element-title">{title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                        <p>{description}</p>
                    </VerticalTimelineElement>
                )
            )}
        </VerticalTimeline>
    );
};

export default Timeline;
