import "./ProjectItem.scss";
import { FC } from "react";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    tools: string;
    link: string;
    github: string;
    backend?: string;
  };
}

const ProjectItem: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project p-5 my-8 h-[15rem] rounded-lg flex flex-col gap-2 justify-between">
      <h4 className="project__title">{project.name}</h4>
      <p className="project__description">{project.description}</p>
      <p className="project__tools">{project.tools}</p>

      <div className="flex flex-wrap gap-2">
        <a href={project.link} className="project__link w-fit" target="_blank">
          Live
        </a>

        {project.backend ? (
          <>
            <a href={project.github} className="project__link w-fit" target="_blank">
              Github : Frontend
            </a>
            <a href={project.backend} className="project__link w-fit" target="_blank">
              Github : Backend
            </a>
          </>
        ) : (
          <a href={project.github} className="project__link w-fit" target="_blank">
            Github
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
