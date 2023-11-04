import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import baseProjects from "./baseProjects";
import ProjectCard from "./ProjectCard";

function Slider() {
  return (
    <div className="slider">
      <Carousel>
        {baseProjects.map((project) => (
          <ProjectCard
            key={project.numProject}
            image={project.image}
            image2={project.image2}
            name={project.name}
            context={project.context}
            type={project.type}
            stack={project.stack}
            length={project.length}
            description={project.description}
            github={project.github}
            link={project.link}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
