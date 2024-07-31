import Heropng from '../assets/hero.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
   const config = {
       subtitle : 'I am a .Net-Fullstack Developer'
   }
   const socilaLink = {
      github: 'https://github.com/Jeevanandannr',
      linkedin:'https://www.linkedin.com/in/jeevanandannr/?trk=public-profile-join-page',
   }

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center" id='hero'>
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-Hero-font">
          Hi,
          <br />I am <span className="text-black font-bold">N.R.</span>{" "}
          JEEVANANDAN
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="py-10">
          <a href={socilaLink.github} className="pr-5 hover:text-white">
            <GitHubIcon sx={{fontSize:40}} />
          </a>
          <a href={socilaLink.linkedin} className="pr-5 hover:text-white">
            <LinkedInIcon sx={{fontSize:40}}/>
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={Heropng} alt="hero" />
    </section>
  );
};

export default Hero;
