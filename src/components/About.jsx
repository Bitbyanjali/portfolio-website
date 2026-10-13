function About() {
  return (
    <section id="about" className="content-section">
      <h2 className="section-heading">About Me</h2>
      <div className="section-line"></div>

      <p className="about-text">
        Hey, I'm Anjali — a Computer Science student specializing in AI and
        Machine Learning, passionate about building useful and user-friendly
        web applications. I'm currently strengthening my skills in React,
        JavaScript, and problem-solving while working on projects that turn
        ideas into practical solutions.
      </p>

      <div className="about-highlights">
        <div className="highlight-card">
          <h3>Frontend Development</h3>
          <p>Building responsive and reusable user interfaces.</p>
        </div>

        <div className="highlight-card">
          <h3>Problem Solving</h3>
          <p>Learning data structures and algorithms with C++.</p>
        </div>

        <div className="highlight-card">
          <h3>Backend Development</h3>
          <p>Learning server-side development, REST APIs, and databases.</p>
        </div>

         <div className="highlight-card">
          <h3>Full Stack Development</h3>
          <p>Bringing frontend and backend technologies together to build complete web applications.</p>
        </div>
      </div>
    </section>
  );
}

export default About;