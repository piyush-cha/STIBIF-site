const PartnershipBenefits = () => {
  const benefits = [
    {
      number: 1,
      icon: "bi-building",
      title: "Advanced Infrastructure",
      description:
        "Access to cutting-edge fabrication labs, 3D printing, robotic arms, and smart manufacturing facilities.",
    },
    {
      number: 2,
      icon: "bi-person-workspace",
      title: "Technical Mentorship",
      description: "Guidance from experienced faculty and industry experts in project development and innovation.",
    },
    {
      number: 3,
      icon: "bi-diagram-3",
      title: "Industry Connections",
      description:
        "Direct access to industry partnerships through our extensive MoU network for internships and collaborations.",
    },
    {
      number: 4,
      icon: "bi-file-earmark-medical",
      title: "Patent Support",
      description: "Comprehensive support for design and product patent filing with legal and technical assistance.",
    },
  ]

  return (
    <section className="section" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="section-title">
          <h2>
            Benefits for <span className="highlight">Innovators</span>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card animate-fade-up">
              <div className="benefit-number">
                <i className={`bi ${benefit.icon}`}></i>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#1e3a5f",
            borderRadius: "12px",
            padding: "3rem 2rem",
            textAlign: "center",
            marginTop: "4rem",
            color: "white",
          }}
        >
          <h3 style={{ color: "white", marginBottom: "1rem" }}>
            <i className="bi bi-rocket-takeoff icon-white"></i> Ready to Innovate with STBIF?
          </h3>
          <p
            style={{
              marginBottom: "2rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Join our growing community of innovators, students, and faculty committed to transforming ideas into
            impactful technology solutions.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/programs" className="btn btn-primary">
              <i className="bi bi-grid-3x3-gap"></i> Explore Programs
            </a>
            <a href="/contact" className="btn btn-outline">
              <i className="bi bi-envelope"></i> Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipBenefits
