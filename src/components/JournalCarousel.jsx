"use client"

import { useState, useEffect } from "react"

const JournalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "About IJMAEMCA",
      content: (
        <div>
          <h3 style={{ color: "#1e3a5f", marginBottom: "1.5rem" }}>
            <i className="bi bi-journal-text icon-orange"></i> International Journal of Multidisciplinary Advances in
            Engineering, Management & Computer Applications
          </h3>
          <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            IJMAEMCA is a multidisciplinary, peer-reviewed open access journal that aims to bridge the gap between
            theory and practice across different areas such as engineering, computing, and management sciences.
          </p>
          <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
            The journal provides a comprehensive platform for scholars, professionals, and researchers to publish
            innovative research and case-based applications that focus on modern challenges and contribute to the
            advancement in science and technology.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            <span
              style={{
                background: "#28a745",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i className="bi bi-unlock"></i> Open Access
            </span>
            <span
              style={{
                background: "#ff6b35",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i className="bi bi-people"></i> Peer-Reviewed
            </span>
            <span
              style={{
                background: "#1e3a5f",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <i className="bi bi-calendar2"></i> Biannual
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Journal Aim & Scope",
      content: (
        <div>
          <h3 style={{ color: "#1e3a5f", marginBottom: "1.5rem" }}>
            <i className="bi bi-bullseye icon-orange"></i> Aim & Objectives
          </h3>
          <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            IJMAEMCA is dedicated to publish innovative and high-quality research that fits in various fields including
            engineering, computing, management, and applied sciences. The journal aims to facilitate the worldwide
            exchange of knowledge, encourage interdisciplinary research, and support inventions that address modern
            technological and societal issues.
          </p>
          <h4 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
            <i className="bi bi-target"></i> Key Focus Areas:
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <i className="bi bi-check-circle" style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}></i>
              Theoretical and applied research with practical relevance
            </li>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <i className="bi bi-check-circle" style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}></i>
              Interdisciplinary research and innovation
            </li>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <i className="bi bi-check-circle" style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}></i>
              Technology adoption and system modeling
            </li>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <i className="bi bi-check-circle" style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}></i>
              Real-world applications and case studies
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Publication Features",
      content: (
        <div>
          <h3 style={{ color: "#1e3a5f", marginBottom: "1.5rem" }}>
            <i className="bi bi-award icon-orange"></i> Publication Standards
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
                <i className="bi bi-search"></i> Review Process
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <i
                    className="bi bi-eye-slash"
                    style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}
                  ></i>
                  Double-blind peer review
                </li>
                <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <i className="bi bi-people" style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}></i>
                  Expert panel evaluation
                </li>
                <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <i
                    className="bi bi-shield-check"
                    style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}
                  ></i>
                  COPE-compliant ethics
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
                <i className="bi bi-database"></i> Indexing
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <i className="bi bi-globe" style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}></i>
                  Reputed databases (under application)
                </li>
                <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <i
                    className="bi bi-link-45deg"
                    style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}
                  ></i>
                  DOI assignment
                </li>
                <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                  <i
                    className="bi bi-cc-circle"
                    style={{ color: "#ff6b35", marginRight: "0.75rem", flexShrink: 0 }}
                  ></i>
                  CC-BY 4.0 License
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <h2 style={{ color: "#1e3a5f", marginBottom: "2rem", textAlign: "center" }}>{slide.title}</h2>
            {slide.content}
          </div>
        ))}
      </div>

      <button className="carousel-nav prev" onClick={prevSlide}>
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="carousel-nav next" onClick={nextSlide}>
        <i className="bi bi-chevron-right"></i>
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default JournalCarousel
