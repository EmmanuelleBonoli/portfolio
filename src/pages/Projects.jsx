import ProjectCard from "../components/ProjectCard";
import projects from "../assets/baseProjects.js";
import { motion } from "framer-motion";

const Projects = () => {

    return (
        <section className="px-6 py-16 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
