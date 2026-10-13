
function Contact() {
  return (
    <section id="contact" className="content-section">
      <h2 className="section-heading">Let's Connect</h2>
      <div className="section-line"></div>

      <p className="section-description">
        Have an opportunity, a project idea, or just want to connect?
        Feel free to reach out.
      </p>

      <div className="contact-card">
        <div className="contact-icon">✉️</div>

        <h3>Get in Touch</h3>

        <p>
          I'm open to connecting with developers, collaborating on projects,
          and exploring internship opportunities.
        </p>

        <a
          className="contact-button"
          href="mailto:sinhaanjali0442@gmail.com"
        >
          Email Me ↗
        </a>

        <div className="contact-social-links">
          <a
            href="https://github.com/Bitbyanjali"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/anjalisinha-ai-ml"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
