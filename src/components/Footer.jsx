import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {currentYear} Emmanuelle Bonoli. Tous droits réservés.
                </p>
                <div className="flex gap-4">
                    <a
                        href="mailto:ebonoli@hotmail.fr"
                        className="hover:text-blue-500 transition"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://github.com/EmmanuelleBonoli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emmanuellebonoli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
