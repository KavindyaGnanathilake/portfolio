import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#02080fff' }}>
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#/">Kavindya</a>

        {/* Hamburger Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/about">Qualifications and Certifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/skills">Work Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/contact">Contact Me and Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
