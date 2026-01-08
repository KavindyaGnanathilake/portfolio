function Projects() {
  const projects = [
    {
      title: "FashionHub",
      description:
        "Social media platform for fashion enthusiasts to share posts, interact, and explore trends.",
      tech: "React, Spring Boot, MySQL",
      link: "https://github.com/KavindyaGnanathilake/CS2071_Group03_EasternFashionHub.git",
    },
    {
      title: "Warehouse Demand & Return Prediction",
      description:
        "Predict product demand and returns using machine learning and deep learning techniques.",
      tech: "Python, ARIMA, LSTM",
      link: "https://github.com/SithumAsitha/OptiFlow-AI.git",
    },
    {
      title: "Data Mining Project – Diabetes Prediction",
      description:
        "Implemented ML models (Random Forest, SVM, Logistic Regression). Evaluated performance using accuracy, precision, recall",
      tech: "Python, Jupyter Notebook",
      link: "https://github.com/SithumAsitha/FDM_Diabetes_Prediction_System.git",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Recommends movies based on user preferences and similarity analysis.",
      tech: "Python, Pandas, Streamlit",
      link: "#",
    },
    {
      title: "E-commerce Management System",
      description:
        "Web-based system for managing products, users, and orders efficiently.",
      tech: "MERN Stack",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "#0d1b2a",
        minHeight: "100vh",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <h2 className="mb-5 fw-bold text-center gradient-text">Projects</h2>

        {/* LIGHT BACKGROUND PANEL */}
        <div className="projects-panel p-4 p-md-5 rounded-4">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="themed-card p-4 h-100 rounded">
                  <h5 className="fw-bold mb-3 badge-title">{project.title}</h5>

                  <p
                    className="mb-3"
                    style={{ lineHeight: 1.6, color: "#000" }}
                  >
                    {project.description}
                  </p>

                  <p className="mb-4">
                    <strong>Technologies:</strong>{" "}
                    <span className="text-info">{project.tech}</span>
                  </p>

                  <a href={project.link} className="btn gradient-btn btn-sm">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* LIGHT PANEL */
        .projects-panel {
          background: rgba(154, 122, 122, 0.9);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        .themed-card {
          position: relative;
          background: #1b263b;
          border-radius: 16px;
          z-index: 1;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* GRADIENT FRAME */
        .themed-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: 16px;
          background: linear-gradient(135deg, #cd23b3, #8a2be2);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: -1;
        }

        .themed-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(138,43,226,0.5);
        }

        .badge-title {
          display: inline-block;
          padding: 6px 14px;
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

        .gradient-btn {
          background: linear-gradient(45deg, #cd23b3, #8a2be2);
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 0.45rem 1.4rem;
          font-weight: 600;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .gradient-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(138,43,226,0.4);
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

export default Projects;
