import {interestsData} from "../assets/interestsData.jsx";

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
