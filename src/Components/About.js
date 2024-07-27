import Aboutpng from "../assets/About.png";
const About = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 justify-center  bg-secondary">
      <div className="md:w-1/2">
        <img src={Aboutpng} alt="about" ></img>
      </div>
      <div className="md:w-1/2 py-5 flex justify-center px-10">
        <div className="flex flex-col justify-center font-Hero-font">
          <h1 className="font-bold font-Hero-font text-4xl text-white border-b-2 w-[160px]">About Me</h1>
          <p className="m-5 text-white text-1xl font-Hero-font">
            Hello! I'm Jeevanandan N R, a passionate .NET Full Stack Developer
            with three years of professional experience in designing,
            developing, and deploying web applications. My expertise lies in
            building scalable, robust, and user-friendly applications using the
            .NET framework, combined with a strong background in front-end
            technologies. I have worked on a diverse range of projects, from
            developing complex enterprise solutions to creating dynamic websites
            for small businesses.
          </p>
          
        </div>
        <div className="flex flex-col justify-center m-7">
            
          <h1 className="font-bold font-Hero-font text-3xl text-white border-b-2 w-[300px]">My skill set includes</h1>
          <p className="text-white m-5"><span className="font-bold text-white text-1xl">Back-End Development:</span> Proficient in C#, ASP.NET Core, Entity Framework, and SQL Server.</p>
          <p className="pb-5 text-white m-5"><span className="font-bold text-white text-1xl">Front-End Development:</span> Skilled in HTML, CSS, JavaScript, and modern framework React.</p>
          <p className="pb-5 text-white m-5"><span className="font-bold text-white text-1xl">API Development:</span> Experienced in building RESTful APIs and integrating third-party services.</p>
          <p className="pb-5 text-white m-5"><span className="font-bold text-white text-1xl">Version Control:</span> Well-versed in using Git for version control and collaboration.</p>
          <p className="pb-5 text-white m-5"><span className="font-bold text-white text-1xl">DevOps:</span>Familiar with CI/CD pipelines, Azure DevOps.</p>
          </div>
      </div>
    </section>
  );
};

export default About;
