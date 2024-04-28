import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link legacyBehavior href="/">
              <a className="navbar-brand">Next.js Bootstrap</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link legacyBehavior href="/about">
                    <a className="nav-link">About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link legacyBehavior href="/login">
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link legacyBehavior href="/register">
                    <a className="nav-link">Register</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link legacyBehavior href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
