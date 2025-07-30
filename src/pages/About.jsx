import { useState } from "react";
import Skills from "../components/Skills.jsx";
import Timeline from "../components/Timeline.jsx";
import Interests from "../components/Interests";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Compétences" },
    { id: "timeline", label: "Parcours" },
    { id: "interests", label: "Centres d’intérêt" },
  ];

  return (
      <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900 max-w-6xl mx-auto">
        <nav className="flex flex-wrap justify-center mb-12 gap-4">
          {tabs.map(({ id, label }) => (
              <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-4 py-2 font-semibold rounded-md transition cursor-pointer
              ${
                      activeTab === id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
              >
                {label}
              </button>
          ))}
        </nav>

        {/* Contenu */}
        <div>
          {activeTab === "skills" && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
                <Skills />
              </>
          )}

          {activeTab === "timeline" && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center">Parcours</h2>
                <div className="max-h-[500px] overflow-y-auto px-2">
                  <Timeline />
                </div>
              </>
          )}

          {activeTab === "interests" && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Centres d’intérêt
                </h2>
                <Interests />
              </>
          )}
        </div>
      </section>
  );
};

export default About;
