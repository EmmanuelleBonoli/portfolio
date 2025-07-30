import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#projets", label: "Projets" },
    { href: "#profil", label: "Profil" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full px-6 py-4 shadow bg-white dark:bg-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-end items-center">

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="hover:text-blue-500 transition"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-gray-600 dark:text-gray-200 cursor-pointer hover:text-blue-500 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-white hover:text-blue-500 transition cursor-pointer" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 px-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block py-2 text-gray-700 dark:text-white hover:text-blue-500 transition"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-500 transition cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            {darkMode ? "Mode clair" : "Mode sombre"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
