
const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript'],
    icon: '💻',
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React'],
    icon: '🎨',
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Node.js'],
    icon: '⚡',
  },
  {
    title: 'Backend',
    skills: ['Node.js'],
    icon: '⚙️',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    icon: '🗄️',
  },
  {
    title: 'Core Subjects',
    skills: [
      'OOPs',
      'DBMS',
      'OS',
      'CN',
    ],
    icon: '📚',
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
    icon: '🛠️',
  },
];

function Skills() {
  return (
    <section id="skills" className="content-section">
      <h2 className="section-heading">Technical Skills</h2>
      <div className="section-line"></div>

      <p className="section-description">
        Technologies, tools, and computer science fundamentals
        I'm learning and using in my projects.
      </p>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <span className="skill-icon" aria-hidden="true">
              {category.icon}
            </span>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;