const PartnersSection = () => {
  const partnerCategories = [
    {
      title: "Academic Partners",
      icon: "bi-mortarboard",
      subtitle: "Educational institutions and research organizations",
      partners: [
        { name: "NPTEL Courses", type: "Online Learning Platform", icon: "bi-laptop" },
        { name: "Technical Universities", type: "Academic Collaboration", icon: "bi-building" },
        { name: "Research Institutes", type: "R&D Partnerships", icon: "bi-search" },
        { name: "Engineering Colleges", type: "Knowledge Exchange", icon: "bi-book" },
      ],
    },
    {
      title: "Industry Partners",
      icon: "bi-building",
      subtitle: "Technology companies and manufacturing organizations",
      partners: [
        { name: "Dassault Systems", type: "CAD Software Solutions", icon: "bi-pc-display" },
        { name: "Manufacturing Companies", type: "Industrial Collaboration", icon: "bi-gear" },
        { name: "Technology Startups", type: "Innovation Partners", icon: "bi-lightbulb" },
        { name: "Automation Firms", type: "Technical Solutions", icon: "bi-robot" },
      ],
    },
    {
      title: "Government Partners",
      icon: "bi-bank",
      subtitle: "Government agencies and policy organizations",
      partners: [
        { name: "Ministry of Education", type: "Educational Policies", icon: "bi-mortarboard" },
        { name: "Department of Science & Technology", type: "Research Funding", icon: "bi-cash-stack" },
      ],
    },
    {
      title: "Technology Partners",
      icon: "bi-cpu",
      subtitle: "Software and hardware technology providers",
      partners: [
        { name: "3D Printing Solutions", type: "Manufacturing Technology", icon: "bi-printer" },
        { name: "AI & ML Platforms", type: "Artificial Intelligence", icon: "bi-brain" },
      ],
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>
            Our <span className="highlight">Partners</span>
          </h2>
          <p className="section-subtitle">
            A strong ecosystem of academic institutions, industry leaders, government bodies, and technology providers
            supporting our mission.
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: "3rem" }}>
          {partnerCategories.map((category, index) => (
            <div key={index} className="animate-fade-up">
              <h3
                style={{
                  color: "#1e3a5f",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className={`bi ${category.icon} icon-orange`}></i>
                {category.title}
              </h3>
              <p
                style={{
                  color: "#6c757d",
                  marginBottom: "2rem",
                  fontSize: "0.95rem",
                }}
              >
                {category.subtitle}
              </p>

              <div
                style={{
                  background: "#f8f9fa",
                  padding: "2rem",
                  borderRadius: "8px",
                }}
              >
                {category.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 0",
                      borderBottom: idx < category.partners.length - 1 ? "1px solid #e9ecef" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "#ff6b35",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        <i className={`bi ${partner.icon}`}></i>
                      </div>
                      <div>
                        <h4
                          style={{
                            margin: 0,
                            fontSize: "1rem",
                            color: "#1e3a5f",
                            fontWeight: "600",
                          }}
                        >
                          {partner.name}
                        </h4>
                        <p
                          style={{
                            margin: "0.25rem 0 0 0",
                            fontSize: "0.875rem",
                            color: "#6c757d",
                          }}
                        >
                          {partner.type}
                        </p>
                      </div>
                    </div>
                    <i className="bi bi-arrow-right" style={{ color: "#ff6b35" }}></i>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
