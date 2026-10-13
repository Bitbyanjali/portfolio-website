
const projects = [
  {
    title: 'CampusFlow',
    category: 'Full Stack Web Application',
    description:
      'A student life management platform designed to organize academic tasks, subjects, and student activities. Currently under development.',
    tech: ['React.js', 'JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/74nandini-dot/CAMPUSflow',
    status: 'In Progress',
  },
  {
    title: 'Personal Portfolio',
    category: 'Frontend Web Development',
    description:
      'A responsive personal portfolio showcasing my technical skills, education, projects, and developer journey.',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Bitbyanjali/portfolio-website',
    status: 'In Progress',
  },
];

function Projects() {
  return (
    <section id="portfolio" className="content-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="section-line"></div>

      <p className="section-description">
        A selection of projects I'm building and improving as I grow
        as a developer.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-category">
                {project.category}
              </span>
              <span className="project-status">
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
