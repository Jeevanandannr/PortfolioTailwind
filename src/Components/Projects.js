import project1png from "../assets/Document_Management.png";
import project2png from "../assets/live_tracking.png";

const Projects = () => {
  const config = [
    {
      image: project1png,
      description:
        "An Itegrated Document Management System Developed Using Asp.net and Reactjs",
      link: "https://github.com/Jeevanandannr",
    },
    {
      image: project2png,
      description:
        "Vehicle Tracking System Developed Using Blazor Web Assembly(.Net Framework)",
      link: "https://github.com/Jeevanandannr",
    },
  ];
  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10">
          <h1 className="font-bold font-Hero-font text-4xl text-white border-b-2 w-[160px]">
            Projects
          </h1>
          <p className="pt-5">
            This Are Two Company Projects Which I Developed Uisng .Net Framework
            And React Framework
          </p>
        </div>
      </div>
      <div className="w-full pt-10">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.map((project) => (
            <div className="relative">
              <img
                className="h-[200px] w-[500px]"
                src={project.image}
                alt="project1"
              ></img>
              <div className="project-description">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                   <a href={project.link} target="_blank" className="btn" rel="noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
