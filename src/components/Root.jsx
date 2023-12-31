import Home from "../pages/Home.jsx";
import MyProfil from "../pages/MyProfil.jsx";
import ProjectsDev from "../pages/ProjectsDev.jsx";
import Contact from "../pages/Contact.jsx";
import SmoothNavigation from "./SmoothNavigation.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";

const Root = () => {
  return (
    <div className="root">
      <Menu />
      <SmoothNavigation />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="projetsdeveloppes">
          <ProjectsDev />
        </section>
        <section id="monprofil">
          <MyProfil />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
