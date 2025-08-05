"use client"
import JournalCarousel from "../components/JournalCarousel"

const Journals = () => {
  const scopeAreas = [
    {
      title: "Engineering and Technology",
      items: [
        "Electrical, Mechanical, Civil, Electronics and Chemical Engineering",
        "Artificial Intelligence and Machine Learning",
        "Robotics, IoT, and Embedded Systems",
        "Renewable Energy and Environmental Engineering",
        "Smart Cities and Infrastructure Development",
        "Materials Science and Nanotechnology",
      ],
    },
    {
      title: "Advanced Computing",
      items: [
        "Cloud Computing, Edge Computing, and High-Performance Systems",
        "Cybersecurity and Blockchain Technology",
        "Data Analytics, Data Mining, and Business Intelligence",
        "Human-Computer Interaction and Software Engineering",
        "Natural Language Processing and Computer Vision",
        "Computational Intelligence and Algorithm Optimization",
      ],
    },
    {
      title: "Management and Applied Business",
      items: [
        "Operations and Supply Chain Management",
        "Strategic and Innovation Management",
        "Digital Transformation and FinTech",
        "Human Resource Management and Leadership",
        "Entrepreneurship and Startup Ecosystems",
        "Marketing Analytics and Consumer Behavior",
      ],
    },
    {
      title: "Interdisciplinary and Applied Sciences",
      items: [
        "Health Informatics and Biomedical Engineering",
        "Agricultural Technology and Food Systems",
        "Education Technology and E-learning",
        "Environmental Sustainability and Climate Action",
        "Smart Governance and Public Policy Analytics",
        "Ethical AI and Technology Governance",
      ],
    },
  ]

  const features = [
    {
      icon: <div className="icon-2d icon-document"></div>,
      title: "Double-Blind Review",
      description: "Rigorous peer review process ensuring quality and objectivity",
    },
    {
      icon: <div className="icon-2d icon-search"></div>,
      title: "Open Access",
      description: "Free access to all published articles under CC-BY 4.0 license",
    },
    {
      icon: <div className="icon-2d icon-stats"></div>,
      title: "Biannual Publication",
      description: "Two issues per year with continuous submission acceptance",
    },
    {
      icon: <div className="icon-2d icon-bulb"></div>,
      title: "Multidisciplinary",
      description: "Covering engineering, computing, management, and applied sciences",
    },
  ]

  return (
    <div>
      {/* Journal Hero */}
      <section className="journal-hero">
        <div className="container">
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            International Journal of <span style={{ color: "#ff6b35" }}>Multidisciplinary Advances</span>
          </h1>
          <h2 style={{ fontSize: "2rem", marginBottom: "2rem", opacity: 0.9 }}>
            in Engineering, Management & Computer Applications
          </h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", opacity: 0.9 }}>
            A peer-reviewed, open access journal bridging theory and practice across engineering, computing, and
            management sciences
          </p>
        </div>
      </section>

      {/* Journal Carousel */}
      <section className="section">
        <div className="container">
          <JournalCarousel />
        </div>
      </section>

      {/* Journal Features */}
      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="section-title">
            <h2>
              Journal <span className="highlight">Features</span>
            </h2>
          </div>

          <div className="journal-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3 style={{ color: "#1e3a5f", marginBottom: "1rem" }}>{feature.title}</h3>
                <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Areas */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>
              Journal <span className="highlight">Scope</span>
            </h2>
            <p className="section-subtitle">
              IJMAEMCA accepts manuscripts covering, but not limited to, the following areas:
            </p>
          </div>

          <div className="scope-grid">
            {scopeAreas.map((area, index) => (
              <div key={index} className="scope-category">
                <h3>{area.title}</h3>
                <ul className="scope-list">
                  {area.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="section-title">
            <h2>
              Submission <span className="highlight">Guidelines</span>
            </h2>
          </div>

          <div className="grid grid-3">
            <div className="card animate-fade-up">
              <div className="card-icon">
                <div className="icon-2d icon-document"></div>
              </div>
              <h3 className="card-title">Types of Papers</h3>
              <p className="card-text">
                The journal accepts original research and review papers in multidisciplinary domains. Authors should
                select appropriate domain and article type before submission.
              </p>
            </div>

            <div className="card animate-fade-up">
              <div className="card-icon">
                <div className="icon-2d icon-search"></div>
              </div>
              <h3 className="card-title">Peer Review Process</h3>
              <p className="card-text">
                Double-blind review process with at least two independent reviewers evaluating scientific merit.
                Editor-in-Chief makes final publication decisions.
              </p>
            </div>

            <div className="card animate-fade-up">
              <div className="card-icon">
                <div className="icon-2d icon-stats"></div>
              </div>
              <h3 className="card-title">Publication Ethics</h3>
              <p className="card-text">
                Strict adherence to COPE guidelines, plagiarism detection, and ethical publishing standards. Zero
                tolerance for research misconduct.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#1e3a5f", marginBottom: "1rem" }}>Ready to Submit Your Research?</h3>
              <p style={{ color: "#6c757d", marginBottom: "2rem" }}>
                Join our community of researchers contributing to multidisciplinary advances in engineering, management,
                and computer applications.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <a href="/submit-manuscript" className="btn btn-primary">
                  Submit Manuscript
                </a>
                <a href="/author-guidelines" className="btn btn-secondary">
                  Author Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Information */}
      <section className="section" style={{ background: "#1e3a5f", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "2rem" }}>Editorial Information</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div>
                <h4 style={{ color: "#ff6b35", marginBottom: "0.5rem" }}>Publication Frequency</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Biannual</p>
              </div>
              <div>
                <h4 style={{ color: "#ff6b35", marginBottom: "0.5rem" }}>Review Process</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Double-Blind</p>
              </div>
              <div>
                <h4 style={{ color: "#ff6b35", marginBottom: "0.5rem" }}>Access Type</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Open Access</p>
              </div>
            </div>
            <p style={{ marginTop: "2rem", opacity: 0.8 }}>
              Editorial Board: One Editor-in-Chief and 5 Editorial Board Members
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journals
