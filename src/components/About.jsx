 function About() {
  const skills = ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Python']

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-card-inner">
            <span className="emoji">👨‍💻</span>
            <h3>Saakashaswal</h3>
            <p>Full-Stack Developer</p>
          </div>
        </div>

        <div className="about-text">
          <p>
            I'm a passionate full-stack developer specializing in creating beautiful,
            responsive web applications. With expertise in React, Node.js, and modern
            web technologies, I bring ideas to life through clean code and stunning design.
          </p>
          <p>
            My journey in web development started with a love for problem-solving and
            creativity. I'm constantly learning and exploring new technologies to deliver
            cutting-edge solutions.
          </p>
          <div className="tags">
            {skills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default About