import Heropng from '../assets/hero.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-Hero-font">
          Hi,
          <br />I am <span className="text-black font-bold">N.R.</span>{" "}
          JEEVANANDAN
          <p className="text-2xl">I am a .Net-Fullstack Developer</p>
        </h1>
        <div className="py-10">
          <a href="https://example.com" className="pr-5 hover:text-white">
            <GitHubIcon sx={{fontSize:40}} />
          </a>
          <a href="https://www.linkedin.com/in/jeevanandannr/?trk=public-profile-join-page" className="pr-5 hover:text-white">
            <LinkedInIcon sx={{fontSize:40}}/>
          </a>
          <a href="https://example.com" className="hover:text-white">
            <EmailIcon sx={{fontSize:40}}/>
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={Heropng} alt="hero" />
    </section>
  );
};

export default Hero;
