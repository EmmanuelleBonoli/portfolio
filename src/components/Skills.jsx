import {Code, Server, Users, Wrench} from "lucide-react";

const Skills = () => {
  const skillsData = [
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

  return (
    <div className="grid md:grid-cols-2 gap-12 mt-15">
      {skillsData.map(({ title, icon, items }) => (
        <div
          key={title}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-base">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
