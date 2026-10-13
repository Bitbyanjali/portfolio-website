
function Education() {
  const educationList = [
    {
      degree: 'B.Tech — Computer Science Engineering (AI & ML)',
      institution: 'Oriental Institute of Science and Technology, Bhopal',
      duration: '2023 – 2027',
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'S.U. College, Hilsa',
      duration: '2020 – 2022',
    },
  ];

  return (
    <section id="education" className="content-section">
      <h2 className="section-heading">Education</h2>
      <div className="section-line"></div>

      <div className="education-list">
        {educationList.map((item) => (
          <div className="education-card" key={item.degree}>
            <div className="education-icon">🎓</div>

            <div className="education-details">
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <span>{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;