import styles from "./ProjectsStyles.module.css";
import youtube from "../../assets/youtube.png";
import edusity from "../../assets/edusity.png";
import advice from "../../assets/advice.png";
import bmw from "../../assets/bmw.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={youtube}
          link1="https://github.com/amalthomas1996/YoutubeClone"
          link2="https://youtube-clone79.netlify.app/"
          h3="YouTube"
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
