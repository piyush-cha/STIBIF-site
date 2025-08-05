const About = () => {
  const achievements = [
    { label: "Active Projects", value: "50+" },
    { label: "Board Members", value: "17" },
    { label: "Industry MoUs", value: "25+" },
    { label: "Patent Applications", value: "10+" },
  ]

  const functions = [
    {
      icon: <div className="icon-2d icon-document"></div>,
      title: "IPR Policy Formulation",
      description: "Formulating comprehensive IPR policy for NRDRS Suryodaya College of Engineering & Technology.",
    },
    {
      icon: <div className="icon-2d icon-bulb"></div>,
      title: "Project Policy Development",
      description:
        "Creating project policies for students from 3rd & 4th year Engineering, 2nd year MBA & MCA, and 3rd year Diploma.",
    },
    {
      icon: <div className="icon-2d icon-rocket"></div>,
      title: "Product Development Leadership",
      description:
        "Leading cross-departmental product development teams to transform projects into market-ready products.",
    },
    {
      icon: <div className="icon-2d icon-stats"></div>,
      title: "Patent Filing Support",
      description:
        "Filing design patents (minimum 2 per department) and product patents (minimum 1 per department) annually.",
    },
  ]

  const facilities = [
    "Robotic arms and automation setup",
    "Dassault CAD Lab with advanced design tools",
    "VMC (Vertical Machining Center)",
    "3D printers and 3D scanners",
    "AI tools and computer lab",
    "Networking tools and infrastructure",
    "Smart manufacturing testing facilities",
    "Experimentation and prototyping labs",
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">
            About <span className="highlight">STBIF</span>
          </h1>
          <p className="page-subtitle">
            Suryodaya Technology Business Incubator Foundation (STBIF) at Suryodaya College of Engineering & Technology,
            Nagpur - Fostering business creativity through an open and innovative environment.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div className="animate-fade-left">
              <h2 style={{ color: "#1e3a5f", marginBottom: "2rem" }}>Our Mission & Vision</h2>

              <div style={{ marginBottom: "3rem" }}>
                <h3 style={{ color: "#ff6b35", marginBottom: "1rem" }}>Mission</h3>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#6c757d" }}>
                  To foster business creativity by offering an open atmosphere where startups can thrive. We believe
                  that the proper environment, space, and ecosystem are essential for any startup to succeed through
                  cutting-edge design and fabrication facilities.
                </p>
              </div>

              <div>
                <h3 style={{ color: "#ff6b35", marginBottom: "1rem" }}>License Information</h3>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#6c757d" }}>
                  Licensed under section 8(1) of the Companies Act, 2013
                  <br />
                  Section 8 License Number: 153892
                </p>
              </div>
            </div>

            <div className="animate-fade-right">
              <div style={{ background: "#f8f9fa", padding: "2rem", borderRadius: "12px" }}>
                <h3 style={{ color: "#1e3a5f", marginBottom: "2rem", textAlign: "center" }}>Key Achievements</h3>
                <div className="grid grid-2" style={{ gap: "1.5rem" }}>
                  {achievements.map((achievement, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "2rem",
                          fontWeight: "700",
                          color: "#ff6b35",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {achievement.value}
                      </div>
                      <div style={{ fontSize: "0.9rem", color: "#6c757d" }}>{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="section-title">
            <h2>
              Core <span className="highlight">Functions</span>
            </h2>
            <p className="section-subtitle">
              Key functions and responsibilities of STBIF in fostering innovation and entrepreneurship.
            </p>
          </div>

          <div className="grid grid-4">
            {functions.map((func, index) => (
              <div key={index} className="card animate-fade-up" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1.5rem", color: "#ff6b35" }}>{func.icon}</div>
                <h3
                  style={{
                    color: "#1e3a5f",
                    marginBottom: "1rem",
                    fontSize: "1.25rem",
                  }}
                >
                  {func.title}
                </h3>
                <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>{func.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div className="animate-fade-left">
              <h2 style={{ color: "#1e3a5f", marginBottom: "2rem" }}>State-of-the-Art Facilities</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#6c757d", marginBottom: "2rem" }}>
                Our cutting-edge design and fabrication labs are equipped with advanced devices specifically designed
                for smart manufacturing, testing, and experimentation. We provide comprehensive infrastructure support
                for innovation and product development.
              </p>

              <div style={{ background: "#fff3e0", padding: "2rem", borderRadius: "12px" }}>
                <h3 style={{ color: "#ff6b35", marginBottom: "1.5rem" }}>Available Equipment & Tools:</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                  {facilities.map((facility, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ color: "#ff6b35", marginRight: "0.75rem", fontSize: "1.2rem" }}>•</span>
                      <span style={{ color: "#6c757d" }}>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-right">
              <div style={{ background: "#1e3a5f", color: "white", padding: "3rem", borderRadius: "12px" }}>
                <h3 style={{ color: "white", marginBottom: "2rem" }}>Key Initiatives 2024-25</h3>
                <div style={{ marginBottom: "2rem" }}>
                  <h4 style={{ color: "#ff6b35", marginBottom: "1rem" }}>Academic Goals</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "0.5rem", opacity: 0.9 }}>• 1 STTP/FDP per department</li>
                    <li style={{ marginBottom: "0.5rem", opacity: 0.9 }}>• 20% GATE exam participation</li>
                    <li style={{ marginBottom: "0.5rem", opacity: 0.9 }}>• NPTEL course completion</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: "#ff6b35", marginBottom: "1rem" }}>Innovation Targets</h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "0.5rem", opacity: 0.9 }}>• 2 design patents per department</li>
                    <li style={{ marginBottom: "0.5rem", opacity: 0.9 }}>• 1 product patent per department</li>
                    <li style={{ marginBottom: "0.5rem", opacity: 0.9 }}>• 5 industry MoUs per department</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" style={{ background: "#1e3a5f", color: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "1rem" }}>Ready to Join Our Innovation Ecosystem?</h2>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "2rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Whether you're a student with an innovative project idea or a faculty member looking to collaborate, STBIF
            provides the perfect environment for turning ideas into reality.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="/programs" className="btn btn-outline">
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
