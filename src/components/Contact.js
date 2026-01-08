import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0d1b2a",
        minHeight: "100vh",
        padding: "80px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <h2 className="mb-5 fw-bold text-center gradient-text">Contact Me</h2>

        <div className="contact-panel row align-items-center p-4 p-md-5 rounded-4">
          {/* LEFT – PROFILE IMAGE */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Kavindya"
              className="profile-img"
            />
          </div>

          {/* RIGHT – ICON LINKS */}
          <div className="col-md-8">
            <div className="icon-grid">
              <a href="mailto:kavindyagnanathilake@gmail.com">
                <img
                  src={`${process.env.PUBLIC_URL}/logos/email.png`}
                  alt="Email"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/kavindya-gnanathilake/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/linkedin.png`}
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://github.com/KavindyaGnanathilake"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/github.png`}
                  alt="GitHub"
                />
              </a>

              <a
                href="https://medium.com/@kavindyagnanathilake"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/medium.png`}
                  alt="Medium"
                />
              </a>

              <a
                href="https://www.instagram.com/kavii_ts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/instagram.png`}
                  alt="Instagram"
                />
              </a>

              <a
                href="https://wa.me/+94702542649"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/logos/whatsapp.png`}
                  alt="WhatsApp"
                />
              </a>
            </div>

            {/* CV BUTTON */}
            <div className="text-center mt-4">
              <a
                href={`${process.env.PUBLIC_URL}/Kavindya_Gnanathilake_CV.pdf`}
                download
                className="cv-btn"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .contact-panel {
          background: rgba(129, 124, 146, 0.92);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
          max-width: 900px;
          margin: 0 auto;
        }

        .profile-img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #8a2be2;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .icon-grid {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .icon-grid img {
          width: 48px;
          height: 48px;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .icon-grid a:hover img {
          transform: translateY(-6px) scale(1.1);
          filter: drop-shadow(0 8px 20px rgba(138,43,226,0.5));
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

        .cv-btn {
          display: inline-block;
          padding: 12px 30px;
          border-radius: 30px;
          background: linear-gradient(135deg, #cd23b3, #8a2be2);
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(138, 43, 226, 0.4);
        }

        .cv-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 35px rgba(138, 43, 226, 0.6);
        }
      `}</style>
    </section>
  );
}

export default Contact;
