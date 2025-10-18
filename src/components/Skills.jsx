 function Skills() {
  const skills = [
    { name: 'React', emoji: '⚛️' },
    { name: 'Node.js', emoji: '🟢' },
    { name: 'JavaScript', emoji: '🟨' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'HTML5', emoji: '📄' },
    { name: 'CSS3', emoji: '🎨' },
    { name: 'Git', emoji: '🔀' },
    { name: 'Python', emoji: '🐍' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'TypeScript', emoji: '💙' },
    { name: 'Express', emoji: '🚂' },
    { name: 'Redux', emoji: '🟣' }
  ]

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <span className="emoji">{skill.emoji}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills