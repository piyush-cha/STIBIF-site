const ApplicationProcess = () => {
  const steps = [
    {
      number: 1,
      icon: "bi-file-earmark-text",
      title: "Project Proposal",
      description:
        "Submit your innovative project proposal with detailed technical specifications and potential market impact.",
      timeline: "Week 1",
    },
    {
      number: 2,
      icon: "bi-search",
      title: "Technical Review",
      description:
        "Our expert panel reviews your proposal based on innovation potential, technical feasibility, and commercial viability.",
      timeline: "Week 2-3",
    },
    {
      number: 3,
      icon: "bi-presentation",
      title: "Presentation & Demo",
      description: "Present your project to our technical committee and demonstrate prototype or proof of concept.",
      timeline: "Week 4",
    },
    {
      number: 4,
      icon: "bi-check-circle",
      title: "Incubation Selection",
      description: "Selected projects are onboarded into our comprehensive incubation program with mentor assignment.",
      timeline: "Week 5",
    },
  ]

  const requirements = [
    "Innovative technology-based project or business idea",
    "Student from 3rd year onwards or faculty member",
    "Clear project timeline and milestone definition",
    "Willingness to participate in STBIF activities",
    "Commitment to patent filing and publication",
    "Active participation in technical forums and events",
  ]

  return (
    <section className="section" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="section-title">
          <h2>
            Application <span className="highlight">Process</span>
          </h2>
          <p className="section-subtitle">
            Join our incubation program through a structured selection process designed to identify the most promising
            technology projects and innovations.
          </p>
        </div>

        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: "#1e3a5f",
            }}
          >
            <i className="bi bi-diagram-3 icon-orange"></i> How to Apply
          </h3>

          <div className="grid grid-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card animate-fade-up"
                style={{
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {index < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "30px",
                      right: "-1rem",
                      width: "2rem",
                      height: "2px",
                      background: "#1e3a5f",
                      zIndex: 1,
                    }}
                  />
                )}

                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#ff6b35",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "#1e3a5f",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                  }}
                >
                  {step.number}
                </div>

                <h4
                  style={{
                    marginBottom: "1rem",
                    color: "#1e3a5f",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    marginBottom: "1rem",
                    fontSize: "0.875rem",
                    color: "#6c757d",
                  }}
                >
                  {step.description}
                </p>

                <span
                  style={{
                    background: "#fff3e0",
                    color: "#ff6b35",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "15px",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                  }}
                >
                  <i className="bi bi-calendar-event"></i> {step.timeline}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-2" style={{ gap: "3rem" }}>
          <div>
            <h3
              style={{
                marginBottom: "2rem",
                color: "#1e3a5f",
              }}
            >
              <i className="bi bi-list-check icon-orange"></i> Eligibility Requirements
            </h3>
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <ul style={{ listStyle: "none", padding: 0 }}>
                {requirements.map((requirement, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                      fontSize: "0.95rem",
                      color: "#6c757d",
                    }}
                  >
                    <i
                      className="bi bi-check-circle"
                      style={{ color: "#ff6b35", marginRight: "0.75rem", marginTop: "0.25rem", flexShrink: 0 }}
                    ></i>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginBottom: "2rem",
                color: "#1e3a5f",
              }}
            >
              <i className="bi bi-rocket-takeoff icon-orange"></i> Ready to Apply?
            </h3>
            <div
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <p
                style={{
                  marginBottom: "2rem",
                  color: "#6c757d",
                }}
              >
                Take the first step towards transforming your innovative project into a successful venture. Our next
                cohort selection begins soon.
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <strong style={{ color: "#1e3a5f" }}>
                    <i className="bi bi-calendar-x"></i> Application Deadline
                  </strong>
                  <span
                    style={{
                      color: "#ff6b35",
                      fontWeight: "600",
                    }}
                  >
                    March 15, 2025
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <strong style={{ color: "#1e3a5f" }}>
                    <i className="bi bi-calendar-check"></i> Program Start
                  </strong>
                  <span
                    style={{
                      color: "#ff6b35",
                      fontWeight: "600",
                    }}
                  >
                    April 1, 2025
                  </span>
                </div>
              </div>

              <a
                href="/apply"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <i className="bi bi-send"></i> Start Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcess
