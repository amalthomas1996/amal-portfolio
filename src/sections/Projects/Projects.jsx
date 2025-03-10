import styles from "./ProjectsStyles.module.css";
import youtube from "../../assets/youtube.png";
import edusity from "../../assets/edusity.png";
import advice from "../../assets/advice.png";
import bmw from "../../assets/bmw.png";
import gemini from "../../assets/gemini1.png";
import ProjectCard from "../../common/ProjectCard";
import openarxe from "../../assets/openarxe.png";
import dns from "../../assets/dns.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dns}
          link1="https://github.com/amalthomas1996/menu-app?tab=readme-ov-file"
          link2="https://menu-app-frontend-zcbz.onrender.com/"
          h3="Menu App"
          p="Menu App for Resto Cafe(MERN Stack)"
        />
        <ProjectCard
          src={openarxe}
          link1="https://openarxe.com/"
          link2="https://openarxe.com/"
          h3="OpenArxe"
          p="Website for architecture firm(Freelance)"
        />
        <ProjectCard
          src={youtube}
          link1="https://github.com/amalthomas1996/YoutubeClone"
          link2="https://youtube-clone79.netlify.app/"
          h3="YouTube"
          p="Clone(React)"
        />
        <ProjectCard
          src={gemini}
          link1="https://github.com/amalthomas1996/Gemini-clone"
          link2="https://gemini-clone96.netlify.app/"
          h3="Google Gemini"
          p="Clone(React)"
        />
        <ProjectCard
          src={edusity}
          link1="https://github.com/amalthomas1996/Edusity"
          link2="https://newedusity.netlify.app/"
          h3="Edusity"
          p="Landing Page(React)"
        />
        <ProjectCard
          src={advice}
          link1="https://github.com/amalthomas1996/random_quote_generator"
          link2="https://random-quote-generator865.netlify.app/"
          h3="Quote Generator"
          p="(React)"
        />
        <ProjectCard
          src={bmw}
          link1="https://github.com/amalthomas1996/simplelandingpagebmw"
          link2="https://regal-salamander-f3e508.netlify.app"
          h3="BMW Landing Page"
          p="(HTML,CSS)"
        />
      </div>
    </section>
  );
}

export default Projects;
