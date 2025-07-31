import {Code, Server, Users, Wrench} from "lucide-react";

export const skillsData = [
    {
        title: "Front-End",
        icon: <Code className="w-6 h-6 text-blue-500" />,
        items: [
            "Langages : Typescript, JavaScript, HTML, CSS",
            "Frameworks : React, Vue, Angular, Next",
            "Outils : Vite, TailwindCSS, Material Ui...",
        ],
    },
    {
        title: "Back-End",
        icon: <Server className="w-6 h-6 text-green-500" />,
        items: [
            "Langages : Java, Node.js",
            "Frameworks : Spring, Nest, Express",
            "Base de données : MySQL, PostgreSQL, Hibernate, MongoDB",
        ],
    },
    {
        title: "Outils & Méthodes",
        icon: <Wrench className="w-6 h-6 text-purple-500" />,
        items: ["Git, GitHub, Gitlab,", "Docker, Jira, Figma", "Méthodes agiles (Scrum)"],
    },
    {
        title: "Soft-Skills & Langues",
        icon: <Users className="w-6 h-6 text-yellow-500" />,
        items: [
            "Rigueur, autonomie, esprit d’équipe",
            "Anglais : courant écrit, intermédiaire parlé (TOEIC 710)",
        ],
    },
];