import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">S</div>
              <div className="logo-text">
                <h3>STBIF</h3>
                <p>Technology Business Incubator</p>
              </div>
            </div>
            <p>
              Fostering business creativity through an open atmosphere at Suryodaya College of Engineering & Technology,
              Nagpur. Licensed under Section 8(1) of the Companies Act, 2013.
            </p>
            <div className="footer-contact">
              <span>
                <i className="bi bi-geo-alt icon-orange"></i>
                Suryodaya College of Engineering & Technology, Nagpur
              </span>
              <span>
                <i className="bi bi-telephone icon-orange"></i>
                +91 712 XXX XXXX
              </span>
              <span>
                <i className="bi bi-envelope icon-orange"></i>
                info@stbif.org
              </span>
            </div>
          </div>

          <div className="footer-section">
            <h4>
              <i className="bi bi-link-45deg icon-orange"></i> Quick Links
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">
                  <i className="bi bi-chevron-right"></i> About STBIF
                </Link>
              </li>
              <li>
                <Link to="/programs">
                  <i className="bi bi-chevron-right"></i> Our Programs
                </Link>
              </li>
              <li>
                <Link to="/journals">
                  <i className="bi bi-chevron-right"></i> IJMAEMCA Journal
                </Link>
              </li>
              <li>
                <Link to="/members">
                  <i className="bi bi-chevron-right"></i> Board Members
                </Link>
              </li>
              <li>
                <Link to="/facilities">
                  <i className="bi bi-chevron-right"></i> Facilities
                </Link>
              </li>
              <li>
                <Link to="/patents">
                  <i className="bi bi-chevron-right"></i> Patent Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <i className="bi bi-mortarboard icon-orange"></i> Programs
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/student-projects">
                  <i className="bi bi-chevron-right"></i> Student Projects
                </Link>
              </li>
              <li>
                <Link to="/product-development">
                  <i className="bi bi-chevron-right"></i> Product Development
                </Link>
              </li>
              <li>
                <Link to="/technophilia">
                  <i className="bi bi-chevron-right"></i> Technophilia Workshops
                </Link>
              </li>
              <li>
                <Link to="/industry-collaboration">
                  <i className="bi bi-chevron-right"></i> Industry Collaboration
                </Link>
              </li>
              <li>
                <Link to="/internships">
                  <i className="bi bi-chevron-right"></i> Internship Programs
                </Link>
              </li>
              <li>
                <Link to="/nptel-courses">
                  <i className="bi bi-chevron-right"></i> NPTEL Courses
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <i className="bi bi-folder icon-orange"></i> Resources
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/ipr-policy">
                  <i className="bi bi-chevron-right"></i> IPR Policy
                </Link>
              </li>
              <li>
                <Link to="/project-guidelines">
                  <i className="bi bi-chevron-right"></i> Project Guidelines
                </Link>
              </li>
              <li>
                <Link to="/facilities">
                  <i className="bi bi-chevron-right"></i> Lab Facilities
                </Link>
              </li>
              <li>
                <Link to="/mou-partners">
                  <i className="bi bi-chevron-right"></i> MoU Partners
                </Link>
              </li>
              <li>
                <Link to="/gate-preparation">
                  <i className="bi bi-chevron-right"></i> GATE Preparation
                </Link>
              </li>
              <li>
                <Link to="/technical-forums">
                  <i className="bi bi-chevron-right"></i> Technical Forums
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Suryodaya Technology Business Incubator Foundation. All rights reserved. License No: 153892</p>
          <div className="footer-social">
            <Link to="/privacy" className="footer-links">
              <i className="bi bi-shield-check"></i> Privacy Policy
            </Link>
            <Link to="/terms" className="footer-links">
              <i className="bi bi-file-text"></i> Terms of Service
            </Link>
            <Link to="/ethics" className="footer-links">
              <i className="bi bi-award"></i> Publication Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
