function Hero() {
  return (
    <>
            {/* HERO SECTION */}
      <section
        id="hero"
        style={{
          background: "linear-gradient(135deg, #0d1b2a, #1b1f3b)",
          color: "#ffffffe0",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
                <div className="container h-100">
          <div className="row align-items-center h-100">
            {/* Left */}
            <div className="col-md-6 text-center text-md-start">
              <h1
                className="display-4 fw-bold mb-3 hero-emoji"
                style={{ fontSize: "3rem", lineHeight: 1.2 }}
              >
                Hi{" "}
                <span
                  style={{ color: "#7b2a2eff", animation: "bounce 2s infinite" }}
                >
                  🙋‍♀️
                </span>
                ,
              </h1>

              <h2
                className="mb-3 hero-name"
                style={{ fontWeight: 700, fontSize: "2.2rem" }}
              >
                I'm <span className="highlighted-name">Kavindya Gnanathilake.</span>
              </h2>

              <h4 className="mb-3 text-light" style={{ color: "#a0aec0", fontWeight: 500 }}>
                Data Science Fresh Graduate
              </h4>

              <p
                className="lead mb-4"
                style={{ maxWidth: "520px", color: "#e2e8f0", lineHeight: 1.6 }}
              >
                Passionate about learning, building, and improving systems using modern technologies.
              </p>

              <div className="d-flex flex-wrap gap-3">
                {/* Contact Button */}
                <a href="/contact" className="btn gradient-btn">
                  Contact Me
                </a>

                {/* CV Download Button */}
                <a
                  href={`${process.env.PUBLIC_URL}/Kavindya_Gnanathilake_CV.pdf`}
                  download
                  className="btn gradient-btn"
                >
                  View my Resume
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="col-md-6 text-center mt-5 mt-md-0">
              <div className="hero-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/hero.jpg`}
                  alt="Kavindya"
                  className="img-fluid rounded shadow-lg floating-img"
                  style={{ maxHeight: "430px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section
        className="py-5"
        style={{ backgroundColor: "#0d1b2a", color: "#fff", fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="container text-center">
          <h1 className="fw-bold mb-4 theme-title">What I Do</h1>
          <div className="row g-4">
            {[
              "Data Science & Machine Learning",
              "Software Development",
              "Quality Assurance & Testing",
              "Data Engineering Fundamentals",
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="p-4 h-100 rounded what-i-do-card">
                  <p className="fw-semibold mb-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* SKILLS SNAPSHOT */}
      <section
        className="py-5"
        style={{ backgroundColor: "#0f172a", color: "#fff" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 theme-title">Skills Snapshot</h2>
          <div className="row g-4 justify-content-center">
            {[
              { name: "Python", src: "logos/python.png" },
              { name: "Java", src: "logos/java.png" },
              { name: "SQL", src: "logos/sql.png" },
              { name: "React", src: "logos/react.png" },
              { name: "Spring Boot", src: "logos/springboot.png" },
              { name: "Machine Learning", src: "logos/ml.png" },
              { name: "Git & GitHub", src: "logos/github.png" },
              { name: "REST APIs", src: "logos/api.png" },
            ].map((skill, i) => (
              <div key={i} className="col-4 col-sm-3 col-md-2">
                <div className="skill-badge-logo d-flex align-items-center justify-content-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/${skill.src}`}
                    alt={skill.name}
                    className="img-fluid"
                    style={{ width: "100px", height: "100px", objectFit: "contain" }}
                  />
                </div>
                <p className="mt-2 mb-0 text-white small">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section
        className="py-5"
        style={{ backgroundColor: "#0d1b2a", color: "#fff" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 theme-title">Why Hire Me?</h2>
          <p
            className="mx-auto"
            style={{ maxWidth: "720px", color: "#cbd5f5" }}
          >
            I am a motivated IT graduate with a strong foundation in data
            science and software development. I value clean code, continuous
            learning, and teamwork, and I enjoy transforming ideas into
            meaningful solutions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-center"
        style={{
          background: "linear-gradient(135deg, #0d1b2a, #1b1f3b)",
          color: "#fff",
        }}
      >
        <h2 className="fw-bold mb-3 theme-title">Let’s Work Together</h2>
        <p className="mb-4" style={{ color: "#cbd5f5" }}>
          Interested in my work or want to collaborate?
        </p>
        <a
          href="/contact"
          className="btn btn-outline-light rounded-pill px-4 me-3"
        >
          Contact Me
        </a>
        <a href="/projects" className="btn gradient-btn">
          View Projects
        </a>
      </section>

      {/* STYLES */}
      <style>{`
        /* Floating animation for hero image */
        .floating-img {
          animation: float 4s ease-in-out infinite;
          transition: transform 0.3s;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .skill-badge-logo {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          border-radius: 50%;
          background: rgba(138,43,226,0.15);
          border: 2px solid rgba(205,35,179,0.4);
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-badge-logo:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 25px rgba(138,43,226,0.4);
          background: linear-gradient(135deg, #731637ff, #bc6382ff);
        }

        .highlighted-name {
          background: linear-gradient(90deg, #cd23b3, #8a2be2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          animation: gradientMove 3s ease infinite;
          background-size: 200% 200%;
        }

        .gradient-btn {
          background: linear-gradient(45deg, #cd23b3, #8a2be2);
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 0.6rem 1.8rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .gradient-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(138,43,226,0.4);
        }

        .what-i-do-card {
          background: #0f172a;
          border: 1px solid rgba(138,43,226,0.2);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .what-i-do-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(138,43,226,0.3);
        }

        .hero-emoji {
          display: inline-block;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-5px); }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #0d1b2a;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #5d1f54ff, #310757ff);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8a2be2, #cd23b3);
        }
        scrollbar-width: thin;
        scrollbar-color: #cd23b3 #0d1b2a;

        /* Theme gradient titles */
        .theme-title {
          background: linear-gradient(90deg, #cd23b3, #8a2be2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          display: inline-block;
          animation: gradientMove 3s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}

export default Hero;
