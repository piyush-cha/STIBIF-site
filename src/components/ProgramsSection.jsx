const ProgramsSection = () => {
  const programs = [
    {
      icon: "bi-rocket-takeoff",
      title: "Student Project Development",
      duration: "6-12 Months",
      badge: "Core Program",
      badgeColor: "#4a90e2",
      description:
        "Comprehensive project development program for 3rd & 4th year Engineering, 2nd year MBA & MCA and 3rd year Diploma students.",
      features: [
        "Domain and project selection guidance",
        "Mentor/guide allotment",
        "Project to product development strategy",
        "Competition participation support",
        "Patent filing assistance",
      ],
      eligibility: "Students from 3rd year onwards",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Product Development Team",
      duration: "Ongoing",
      badge: "Innovation",
      badgeColor: "#1e3a5f",
      description:
        "Faculty-led product development team working on selected departmental projects to achieve product-level outcomes.",
      features: [
        "Cross-departmental collaboration",
        "Design and product patent filing",
        "Advanced manufacturing facilities",
        "3D printing and scanning support",
        "Robotic arms and automation setup",
      ],
      eligibility: "Faculty and selected student projects",
    },
    {
      icon: "bi-lightbulb",
      title: "Technophilia Workshops",
      duration: "Year-round",
      badge: "Educational",
      badgeColor: "#28a745",
      description:
        "4-hour intensive training workshops on IoT/Manufacturing for school and junior college students at CSED.",
      features: [
        "IoT technology training",
        "Smart manufacturing concepts",
        "Hands-on practical sessions",
        "Industry exposure programs",
        "Career guidance sessions",
      ],
      eligibility: "School and Jr. College students",
    },
    {
      icon: "bi-lightning-charge",
      title: "Industry Collaboration",
      duration: "Project-based",
      badge: "Partnership",
      badgeColor: "#6f42c1",
      description: "Strategic partnerships with industry for live projects, R&D work, consultancy, and internships.",
      features: [
        "Minimum 5 MoUs per department",
        "Live project opportunities",
        "Faculty and student industrial visits",
        "Internship placements",
        "Consultancy work facilitation",
      ],
      eligibility: "All departments and students",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>
            Our <span className="highlight">Programs</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive programs designed to support students, faculty, and entrepreneurs at every stage of their
            innovation journey.
          </p>
        </div>

        <div className="grid grid-2">
          {programs.map((program, index) => (
            <div key={index} className="card animate-fade-up">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    color: "#ff6b35",
                  }}
                >
                  <i className={`bi ${program.icon}`}></i>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      background: program.badgeColor,
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "15px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                    }}
                  >
                    {program.badge}
                  </span>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      fontSize: "0.875rem",
                      color: "#6c757d",
                    }}
                  >
                    <i className="bi bi-clock icon-orange"></i> {program.duration}
                  </p>
                </div>
              </div>

              <h3 className="card-title">{program.title}</h3>
              <p className="card-text">{program.description}</p>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    color: "#1e3a5f",
                  }}
                >
                  <i className="bi bi-check-circle icon-orange"></i> Key Features:
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#6c757d",
                      }}
                    >
                      <i className="bi bi-dot" style={{ color: "#ff6b35", marginRight: "0.5rem" }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  borderTop: "1px solid #e9ecef",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong
                    style={{
                      fontSize: "0.875rem",
                      color: "#1e3a5f",
                    }}
                  >
                    <i className="bi bi-person-check icon-orange"></i> Eligibility:
                  </strong>
                  <p
                    style={{
                      margin: "0.25rem 0 0 0",
                      fontSize: "0.875rem",
                      color: "#6c757d",
                    }}
                  >
                    {program.eligibility}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
