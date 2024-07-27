import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {
  const projects = [
    {
      name: "ProjectHub",
      description:
        "A project planning and management app.",
      tools: 'Nodejs, Express, MySql, React (vite), ContextApi and Sass.',
      link: "https://projecthub-main.netlify.app/",
      github: 'https://github.com/Eloagbawe/project-hub',
      backend: 'https://github.com/Eloagbawe/project-hub-api'
    },
    {
      name: "Worka",
      description: "A web app to find artisans.",
      tools: 'Nodejs, Express, Mongodb, React, Redux, and Tailwindcss.',
      link: "https://worka-main.netlify.app/",
      github: 'https://github.com/Eloagbawe/worka'
    },
    {
      name: "TravelPaddi",
      description: "A web app that connects users with similar itineraries.",
      tools: 'Nodejs, Express, Mongodb, React, Redux and Tailwindcss.',
      link: "https://travelpaddi.netlify.app/",
      github: 'https://github.com/Eloagbawe/travelPaddi'
    }
  ];
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectItem
            project={project}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
