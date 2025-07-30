import { motion } from "framer-motion";

const Home = () => {
    return (
        <section
            id="home"
            className=" relative  flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900"
        >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
            >
                Emmanuelle Bonoli
            </motion.h1>

            <motion.img
                src="/images/photoCVEBonoli.jpg"
                alt="Emmanuelle Bonoli"
                className="w-40 h-40 rounded-full object-cover mb-8 shadow-lg border-4 border-blue-400 dark:border-blue-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-lg md:text-xl max-w-2xl mb-8 px-2"
            >
                Développeuse web fullstack passionnée par la création de solutions
                élégantes, performantes et accessibles. Découvrez mes projets, mon profil
                et mes compétences.
            </motion.p>

            <motion.a
                href="#projets"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                Voir mes projets
            </motion.a>

            <motion.div
                className="animate-bounce mt-4 text-blue-600 dark:text-blue-400 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <a href="#projets" aria-label="Scroll vers Projets">⬇️</a>
            </motion.div>

            <img src="/images/laptop.png" alt="laptop" className="absolute bottom-10 right-5 w-32 md:w-80 lg:w-88 opacity-40 pointer-events-none" />
        </section>
    );
};

export default Home;
