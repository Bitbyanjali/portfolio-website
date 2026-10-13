import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
                    <img
            src="/uniform.jpeg"
            alt="Anjali Sinha"
            className="profile-photo"
            />
        <h2>Anjali Sinha</h2>
        <p>Frontend Developer</p>
      </div>

      <div className="contact">
        <div className="contact-item">
          <h3>Email</h3>
          <a href="mailto:sinhaanjali0442@gmail.com">
            sinhaanjali0442@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <h3>Location</h3>
          <p>Bhopal, India</p>
        </div>
      </div>

      <div className="social">
        <a href="https://github.com/Bitbyanjali" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/anjalisinha-ai-ml" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://x.com/Bitbyanjali" target="_blank" rel="noreferrer">
          X
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;