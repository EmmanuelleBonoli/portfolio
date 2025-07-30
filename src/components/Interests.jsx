import {SquareCode, PencilRuler, School, Volleyball} from "lucide-react";

const interestsData = [
    {
        title: "Vie Associative",
        description:
            "Trésorière et membre du conseil d'administration du CEC Moulin Gautron (330 adhérents) à Vertou.",
        icon: <School className="w-20 h-20 mb-4" />
    },
    {
        title: "Dessin / Digital Painting",
        description:
            "Participation au festival International de la BD d'Angoulême et au challenge Inktober.",
        icon: <PencilRuler className="w-20 h-20 mb-4"  />
    },
    {
        title: "Tennis",
        description: "",
        icon: <Volleyball className="w-20 h-20 mb-4"  />
    },
    {
        title: "Développement Web",
        description: "",
        icon: <SquareCode className="w-20 h-20 mb-4"  />
    },
];

const Interests = () => {
    return (
        <section className="py-10 max-w-5xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {interestsData.map(({ title, description, icon }) => (
                    <div
                        key={title}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                    >
                        {icon}
                        <h3 className="text-xl font-medium mb-2">{title}</h3>
                        {description && (
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Interests;
