import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    const getContextColor = (context) => {
        if (context.toLowerCase().includes("stage")) return "bg-green-100 text-green-800";
        if (context.toLowerCase().includes("formation")) return "bg-yellow-100 text-yellow-800";
        if (context.toLowerCase().includes("perso")) return "bg-blue-100 text-blue-800";
        return "bg-gray-200 text-gray-800";
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition relative flex flex-col"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <span
                className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${getContextColor(project.context)}`}
            >
                {project.context}
            </span>

            <h3 className="text-xl font-semibold mb-2 mt-2">{project.name}</h3>
            <p className="text-sm mb-3 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
                {project.stack.split(",").map((tech) => (
                    <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-800 dark:text-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                    >
                        {tech.trim()}
                    </span>
                ))}
            </div>

            <div className="flex gap-3">
                {project.github && project.github.length > 0 && (
                    <div className="flex gap-1">
                        {project.github.map((url, index) => (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm"
                            >
                                Code {project.github.length > 1 ? index + 1 : ""}
                            </a>
                        ))}
                    </div>
                )}
                {project.link && project.link !== "Vous y êtes !"?(
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-sm"
                    >
                        Voir le site
                    </a>
                ):
                    project.link !== "Vous y êtes !" ?(
                    <span className="text-gray-500 text-sm">En cours</span>
                ): (
                    <span className="text-gray-500 text-sm">Vous y êtes !</span>
                    )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
