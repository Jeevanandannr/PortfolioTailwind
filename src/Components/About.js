import Aboutpng from "../assets/About.png";
const About = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 justify-center py-32 bg-secondary">
      <div className="md:w-1/2">
        <img src={Aboutpng} alt="about" ></img>
      </div>
      <div className="md:w-1/2 flex justify-center px-10">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold font-Hero-font text-4xl text-white border-b-2 w-[170px]">About Me</h1>
          <p className="m-5 text-white text-2xl font-Hero-font">
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
      </div>
    </section>
  );
};

export default About;
