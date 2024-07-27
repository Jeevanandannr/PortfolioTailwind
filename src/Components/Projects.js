import project1png from "../assets/Document_Management.png";
import project2png from "../assets/live_tracking.png";

const Projects = () => {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-1/2">
        <div className="flex justify-center">
          <h1 className="font-bold font-Hero-font text-4xl text-white border-b-2 w-[160px]">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-1/2 pt-10">
        <div className="flex px-10 gap-5">
          <div>
            <img className="h-[200px]" src={project1png} alt="project1"></img>
            <div>
                <p>An Itegrated Document Management System Developed Using Asp.net and Reactjs</p>
            </div>
          </div>
          <div>
            <img className="h-[200px]" src={project2png} alt="project2"></img>
            <div>
                <p>
                    Vehicle Tracking System Developed Using Blazor Web Assembly(.Net Framework) 
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
