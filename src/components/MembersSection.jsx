const MembersSection = () => {
  const members = [
    {
      name: "Mr. Ranjeet Deepak Chafle",
      photo: "/images/member-ranjeet.png",
      title: "Director",
      role: "Leadership & Strategic Planning",
      description:
        "Leading the strategic vision and overall direction of STBIF with extensive experience in technology business development.",
      expertise: ["Strategic Planning", "Business Development", "Technology Innovation"],
    },
    {
      name: "Dr. Rasika Chafle",
      photo: "/images/member-rasika.png",
      title: "Director",
      role: "Academic Leadership & Research",
      description:
        "Driving academic excellence and research initiatives with deep expertise in engineering education and innovation.",
      expertise: ["Academic Leadership", "Research Management", "Innovation Strategy"],
    },
    {
      name: "Dr. Vitthal Arajpure",
      photo: "/images/member-vitthal.png",
      title: "Member Secretary",
      role: "Operations & Administration",
      description:
        "Managing day-to-day operations and administrative functions to ensure smooth functioning of all STBIF activities.",
      expertise: ["Operations Management", "Administration", "Process Optimization"],
    },
    {
      name: "Dr. Vivek Parhate",
      photo: "/images/member-vivek.png",
      title: "Mentor",
      role: "Technical Mentorship",
      description:
        "Providing technical guidance and mentorship to students and faculty in their innovation and research endeavors.",
      expertise: ["Technical Mentoring", "Research Guidance", "Project Development"],
    },
    {
      name: "Dr. Vijay Nagpurkar",
      photo: "/images/member-vijay.png",
      title: "Member",
      role: "Technology Development",
      description:
        "Contributing to technology development initiatives and fostering innovation in engineering applications.",
      expertise: ["Technology Development", "Engineering Innovation", "Product Design"],
    },
    {
      name: "Mr. Ram Wayzode",
      photo: "/images/member-ram.png",
      title: "Member",
      role: "Industry Relations",
      description:
        "Building and maintaining strong industry partnerships to create opportunities for students and faculty.",
      expertise: ["Industry Relations", "Partnership Development", "Corporate Liaison"],
    },
  ]

  return (
    <section className="section" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="section-title">
          <h2>
            Our <span className="highlight">Members</span>
          </h2>
          <p className="section-subtitle">
            Dedicated leaders and professionals committed to fostering innovation and entrepreneurship at STBIF.
          </p>
        </div>

        <div className="grid grid-3">
          {members.map((member, index) => (
            <div key={index} className="member-card animate-fade-up">
              <img src={member.photo || "/placeholder.svg"} alt={member.name} className="member-photo" />

              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">
                <i className="bi bi-award icon-orange"></i> {member.title}
              </p>
              <p className="member-role">
                <i className="bi bi-briefcase icon-orange"></i> {member.role}
              </p>

              <p className="member-description">{member.description}</p>

              <div>
                <h4 style={{ fontSize: "0.9rem", marginBottom: "0.75rem", color: "#1e3a5f" }}>
                  <i className="bi bi-gear icon-orange"></i> Expertise:
                </h4>
                <div className="member-expertise">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
            <h4 style={{ color: "#1e3a5f", marginBottom: "1rem" }}>
              <i className="bi bi-people-fill icon-orange"></i> Additional Board Members
            </h4>
            <p style={{ color: "#6c757d", marginBottom: "0" }}>
              Dr. Priti Bhagat, Mr. Pradip Balbudhe, Ms. Priyanka Nanwatkar, Mr. Ajay Nanotkar, Dr. Sangeeta Itankar,
              Dr. Bhojraj Kale, Dr. Sanjay Mahajan, Dr. Manoj Baseshakar, and Mr. Amit Bankar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersSection
