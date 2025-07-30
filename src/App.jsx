import { BrowserRouter as Router } from "react-router-dom";
import Header  from "./components/Header.jsx";
import Footer  from "./components/Footer";
import  Home  from "./pages/Home";
import  ProjectsDev  from "./pages/Projects.jsx";
import  About  from "./pages/About";
import  Contact  from "./pages/Contact";
 import "./index.css";

function App() {
  return (
      <Router>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
              <Header />
              <main className="flex-1">
                  <section id="home" className="min-h-[90vh]">
                      <Home />
                  </section>
                  <section id="projets" className="min-h-screen">
                      <ProjectsDev />
                  </section>
                  <section id="profil" className="min-h-screen">
                      <About />
                  </section>
                  <section id="contact" className="pb-20" >
                      <Contact />
                  </section>
              </main>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
