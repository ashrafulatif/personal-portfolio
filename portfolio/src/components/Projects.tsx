import Card from "./Card";
import data from "../Data/Data.json";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto py-5 px-4" data-aos="fade-right" data-aos-duration="600">
      <div className="flex items-center mb-10">
        <h1 className="text-textSecondary text-2xl whitespace-nowrap">
          Some Things I've Built
        </h1>
        <div className=" h-[1px] bg-[#243554] ml-4  w-1/3"></div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
