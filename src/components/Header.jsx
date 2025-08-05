"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          {/* <div className="logo-icon">S</div> */}
          <img src="/STBIF.jpg" alt="STBIF Logo" width={"100px"}/>
          <div className="logo-text">
            <h1>Suryodaya</h1>
            <p>Technical Business Incubation Foundation</p>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/" className={isActive("/") ? "active" : ""}>
           Home
          </Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
          About
          </Link>
          <Link to="/journals" className={isActive("/journals") ? "active" : ""}>
            Journals
          </Link>
          <Link to="/programs" className={isActive("/programs") ? "active" : ""}>
           Programs
          </Link>
          <Link to="/members" className={isActive("/members") ? "active" : ""}>
          Members
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
           Contact
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
  )
}

export default Header
