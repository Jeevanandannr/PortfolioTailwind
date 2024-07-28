import Resumepng from "../assets/Resuem.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Resume = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 justify-center  bg-secondary">
      <div className="md:w-1/2 flex justify-end pt-20">
        <img className="w-[300px]" src={Resumepng} alt="about"></img>
      </div>
      <div className="md:w-1/2 py-5 pt-20 flex justify-center px-10">
        <div className="flex flex-col justify-center font-Hero-font">
          <h1 className="font-bold font-Hero-font text-4xl text-white border-b-2 w-[160px]">
            Resume
          </h1>
          <p className="m-5 text-white text-1xl font-Hero-font">
             You can View My Resume <a className="btn" href="#">Download</a>
          </p>
          
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
