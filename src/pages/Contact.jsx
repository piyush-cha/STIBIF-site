"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">
            Get in <span className="highlight">Touch</span>
          </h1>
          <p className="page-subtitle">
            Ready to start your innovation journey? Have questions about our programs? We're here to help you take the
            next step at STBIF.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "4rem" }}>
            {/* Contact Form */}
            <div className="animate-fade-left">
              <h2 style={{ color: "#1e3a5f", marginBottom: "2rem" }}>Send us a Message</h2>

              <form
                onSubmit={handleSubmit}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div className="grid grid-2" style={{ gap: "1rem", marginBottom: "1.5rem" }}>
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-right">
              <h2 style={{ color: "#1e3a5f", marginBottom: "2rem" }}>Contact Information</h2>

              <div style={{ marginBottom: "3rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "2rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "#ff6b35",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    <div className="icon-2d icon-location"></div>
                  </div>
                  <div>
                    <h3 style={{ color: "#1e3a5f", marginBottom: "0.5rem" }}>Address</h3>
                    <p style={{ color: "#6c757d", margin: 0 }}>
                      Suryodaya College of Engineering & Technology
                      <br />
                      STBIF Campus, Nagpur
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "2rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "#ff6b35",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    <div className="icon-2d icon-phone"></div>
                  </div>
                  <div>
                    <h3 style={{ color: "#1e3a5f", marginBottom: "0.5rem" }}>Phone</h3>
                    <p style={{ color: "#6c757d", margin: 0 }}>
                      +91 712 XXX XXXX
                      <br />
                      +91 712 XXX XXXX (Admissions)
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "2rem" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "#ff6b35",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    <div className="icon-2d icon-email"></div>
                  </div>
                  <div>
                    <h3 style={{ color: "#1e3a5f", marginBottom: "0.5rem" }}>Email</h3>
                    <p style={{ color: "#6c757d", margin: 0 }}>
                      info@stbif.org
                      <br />
                      director@stbif.org
                      <br />
                      projects@stbif.org
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "#ff6b35",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    <div className="icon-2d icon-clock"></div>
                  </div>
                  <div>
                    <h3 style={{ color: "#1e3a5f", marginBottom: "0.5rem" }}>Office Hours</h3>
                    <p style={{ color: "#6c757d", margin: 0 }}>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Information */}
      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="section-title">
            <h2>
              Visit Our <span className="highlight">Campus</span>
            </h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "3rem",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#ff6b35",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                fontSize: "2rem",
              }}
            >
              <div className="icon-2d icon-location" style={{ width: "40px", height: "40px" }}></div>
            </div>
            <h3 style={{ color: "#1e3a5f", marginBottom: "1rem" }}>STBIF Campus Location</h3>
            <p style={{ color: "#6c757d", marginBottom: "2rem" }}>
              Located at Suryodaya College of Engineering & Technology, Nagpur
            </p>
            <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
              License Number: 153892 (Section 8(1) of the Companies Act, 2013)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
