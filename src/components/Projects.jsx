function Projects() {
  const projects = [
    { title: 'Tic-Tac-Toe Game', description: 'An fully functional tic tac toe game with playing bot.', tech: ['vallina js', 'bootstrap'], icon: <img src="tic-tac-toe-game-svgrepo-com.svg" height={"200px"} />, className: 'p1', github: 'https://github.com/s-aakash2026/',
      demo: 'https:/s-aakash2026.github.io/advance-tic-tac-toe/' },
    {
      title: 'To-Do-List', description: 'A simple to-do Website', tech: ['CSS3', 'JavaScript'], icon: <img src="to-do-list-svgrepo-com.svg" height={"200px"} />, className: 'p2' ,
      github: 'https://github.com/s-aakash2026/',
      demo: 'https:/s-aakash2026.github.io/To-do-list-/'

    },

  ]

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className={`project-header ${project.className}`}>
              {project.icon}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn code-btn"
                >
                  <span className="btn-icon">💻</span>
                  Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn demo-btn"
                >
                  <span className="btn-icon">🔗</span>
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects