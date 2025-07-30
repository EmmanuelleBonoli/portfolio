import {skillsData} from "../assets/skillsData.js";

const Skills = () => {
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
