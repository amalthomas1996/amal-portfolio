import React from "react";

function ProjectCard({ src, link1, link2, h3, p }) {
  return (
    <span>
      <a href={link1} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />

        <h3>{h3}</h3>
        <p>{p}</p>
      </a>

      <a href={link2} target="_blank">
        <button className="hover">View Live</button>
      </a>
    </span>
  );
}

export default ProjectCard;
