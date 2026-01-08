function Skills() {
  

  const experiences = [
    {
      role: "Supply Chain Management Researcher",
      company: "John Keells Logistics, Ederamulla",
      duration: "Jun 2024 - May 2025",
      achievements: [
        "Developed predictive models (Python) to reduce inventory costs",
        "Collaborated with cross-functional teams to refine forecasting models, improving accuracy",
      ],
    },
    {
      role: "Intern – Data Research Analyst",
      company: "Adventus International Organization",
      duration: "Oct 2023 - May 2024",
      achievements: [
        "Built Python scripts for Selenium automation, improving data extraction efficiency",
        "Applied ETL principles to extract, clean, and transform university data from web sources",
        "Debugged automation scripts, reducing runtime",
      ],
    },
  ];
  const skills = [
    { category: "Programming Languages", items: "Java, Python, JavaScript" },
    { category: "Frontend", items: "React, HTML, CSS, Bootstrap" },
    { category: "Backend", items: "Node.js, Express, Spring Boot" },
    { category: "Databases", items: "MySQL, MongoDB" },
    { category: "Tools", items: "Git, GitHub, VS Code, Postman" },
  ];

  return (
    <section
      id="skills"
      style={{
        background: "#0d1b2a",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">

        

        {/* WORK EXPERIENCE */}
        <h2 className="mb-5 fw-bold text-center gradient-text">
          Work Experience
        </h2>

        <div className="row g-4">
          {experiences.map((exp, i) => (
            <div key={i} className="col-md-6">
              <div className="p-4 rounded themed-card h-100">
                <h5 className="fw-bold mb-2 badge-title">
                  {exp.role}
                </h5>
                <p className="mb-1">
                  <strong>Company:</strong> {exp.company}
                </p>
                <p className="mb-3">
                  <strong>Duration:</strong> {exp.duration}
                </p>
                <ul style={{ paddingLeft: "1.2rem", color: "#e2e8f0" }}>
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
        <h2 className="mb-5 fw-bold text-center gradient-text">
          Skills
        </h2>

        <div className="row g-4 mb-5">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="p-4 rounded themed-card h-100">
                <h5 className="fw-bold mb-3 badge-title">
                  {skill.category}
                </h5>
                <p className="mb-0 text-light">{skill.items}</p>
              </div>
            </div>
          ))}
        </div>

      {/* STYLES */}
      <style>{`
        .themed-card {
          background: #1b263b;
          border: 1px solid rgba(138,43,226,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .themed-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(138,43,226,0.35);
        }

        .badge-title {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 8px;
          background: linear-gradient(135deg, #cd23b3, #8a2be2);
          color: #fff;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        .gradient-text {
          background: linear-gradient(90deg, #cd23b3, #8a2be2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

export default Skills;
