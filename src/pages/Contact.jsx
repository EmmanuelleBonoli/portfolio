import { Github, Linkedin, Mail } from "lucide-react";
import {cvLink, githubLink, email, linkedinLink} from "../assets/socialNetworks.js";

const Contact = () => {
  return (
      <section className="max-w-3xl mx-auto p-8 bg-indigo-900 text-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Emmanuelle BONOLI</h2>
            <img
                className="w-40 h-40 rounded-full object-cover shadow-md"
                src="../../images/photoCVEBonoli.jpg"
                alt="Emmanuelle BONOLI"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
                href={cvLink}
                download
                className="mb-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition"
            >
              Télécharger mon CV
            </a>

            <h3 className="mb-4 text-lg font-semibold">
              N&#39;hésitez pas à me contacter via les liens ci-dessous
            </h3>

            <div className="flex justify-center md:justify-start gap-8">
              <a      className="hover:text-blue-500 transition" href={`mailto:${email}`} aria-label="Envoyer un email">
                <Mail size={40} />
              </a>
              <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                  aria-label="GitHub"
              >
                <Github size={40} />
              </a>
              <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                  aria-label="LinkedIn"
              >
                <Linkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
