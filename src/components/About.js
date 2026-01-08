function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0d1b2a",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        {/* EDUCATION SECTION */}
        <h2 className="mb-5 fw-bold text-center gradient-text">Education</h2>
        <div className="row g-4">
          {/* Education Card 1 */}
          <div className="col-md-12">
            <div className="p-4 rounded shadow-sm themed-card d-flex align-items-center">
              {/* Logo */}
              <div className="me-4 flex-shrink-0">
                <img
                  src="/logos/sliit.png" // replace with your logo path
                  alt="SLIIT Logo"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>
              {/* Details */}
              <div>
                <h5 className="fw-bold mb-3 badge-title">
                  Bachelor of Science Honors in Information Technology
                  specializing in Data Science
                </h5>
                <p className="mb-1">
                  <strong>Institution:</strong> Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <p className="mb-1"><strong>Status:</strong> Officially Graduated</p>
                <p className="mb-1"><strong>Duration:</strong> June 2021 - June 2025</p>
                <p className="mb-1">
                  <strong>Key Focus Areas:</strong> Data Mining & Machine Learning, Big Data Analytics, Predictive Modeling, Data Visualization, Database Systems
                </p>
              </div>
            </div>
          </div>

          {/* Education Card 2 */}
          <div className="col-md-12">
            <div className="p-4 rounded shadow-sm themed-card d-flex align-items-center">
              {/* Logo */}
              <div className="me-4 flex-shrink-0">
                <img
                  src="/logos/eusl.png" // replace with your logo path
                  alt="EUSL Logo"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
              </div>
              {/* Details */}
              <div>
                <h5 className="fw-bold mb-3 badge-title">
                  BSc in Physical Science (Mathematics & Computer Science)
                </h5>
                <p className="mb-1">
                  <strong>Institution:</strong> Eastern University, Sri Lanka (EUSL)
                </p>
                <p className="mb-1"><strong>Status:</strong> All examinations completed</p>
                <p className="mb-1"><strong>Duration:</strong> November 2022 - November 2025</p>
                <p className="mb-1">
                  <strong>Key Focus Areas:</strong> Advanced Mathematics & Statistics, Algorithms & Programming, Computational Problem Solving
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATES SECTION */}
        <h2 className="my-5 fw-bold text-center gradient-text">Certificates</h2>
        <div className="row g-4">
          {[
            { title: "Microsoft Badge for Power BI", year: 2023, issuer: "Microsoft" },
            { title: "Foundation of Data Science", year: 2023, issuer: "Great Learning Academy" },
            { title: "Data Analysis using PySpark", year: 2023, issuer: "Great Learning Academy" },
            { title: "PyCharm for Beginners", year: 2023, issuer: "Great Learning Academy" },
          ].map((cert, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="p-3 rounded shadow-sm text-center themed-card">
                <h6 className="fw-bold mb-2 badge-title">{cert.title}</h6>
                <p className="mb-1">{cert.issuer}</p>
                <p className="text-muted">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .themed-card {
          background: #1b263b;
          border: 1px solid rgba(138,43,226,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .themed-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(138,43,226,0.3);
        }

        .badge-title {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 6px;
          color: #fff;
          font-weight: 700;
          background: linear-gradient(135deg, #cd23b3, #8a2be2);
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

export default About;
