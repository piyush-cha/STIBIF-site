const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fade-up">
          <div className="hero-badge">
            {/* <i className="bi bi-star-fill icon-orange"></i> */}
           • Fostering Innovation • Building Tomorrow's Leaders
          </div>

          <h1>
            Suryodaya Technical
            <br />
            <span className="highlight">Business Incubation</span>
            <br />
            Foundation
          </h1>

          <p className="hero-subtitle">
            Empowering entrepreneurs and innovators through comprehensive incubation programs, mentorship, and strategic
            partnerships to transform groundbreaking ideas into successful technology ventures at Suryodaya College of
            Engineering & Technology, Nagpur.
          </p>

          <div className="hero-buttons">
            <a href="/apply" className="btn btn-primary">
                 Apply Now
            </a>
            <a href="/programs" className="btn btn-outline">
                Explore Programs
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">
       
                Projects Incubated
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹10Cr+</span>
              <span className="stat-label">
                  Funding Facilitated
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number">17</span>
              <span className="stat-label">
                  Board Members
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">
                Industry MoUs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
