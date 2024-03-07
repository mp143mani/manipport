import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleItemClick = (path) => {
    navigate(path);
    setIsOffcanvasOpen(false); // Close the offcanvas menu when an item is clicked
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top b1">
        <div className="container-fluid">
          <a className="navbar-brand">My Portfolio</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`offcanvas offcanvas-end d-lg-none ${isOffcanvasOpen ? 'show' : ''}`}
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                My Portfolio
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                onClick={handleToggle}
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item" onClick={() => handleItemClick('/home')}>
                  <a
                    className="nav-link"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={() => handleItemClick('/about')}>
                  <a className="nav-link ">About</a>
                </li>
                <li className="nav-item" onClick={() => handleItemClick('/project')}>
                  <a className="nav-link">Projects</a>
                </li>
                <li className="nav-item" onClick={() => handleItemClick('/skill')}>
                  <a className="nav-link">Skills</a>
                </li>
                <li className="nav-item" onClick={() => handleItemClick('/certificate')}>
                  <a className="nav-link">Certificate</a>
                </li>
                <li className="nav-item" onClick={() => handleItemClick('/contact')}>
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Regular navbar for large devices */}
          <div className="collapse navbar-collapse d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item" onClick={() => handleItemClick('/home')}>
                <a className="nav-link active mx-3 " aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={() => handleItemClick('/about')}>
                <a className="nav-link mx-3">About</a>
              </li>
              <li className="nav-item" onClick={() => handleItemClick('/project')}>
                <a className="nav-link mx-3">Projects</a>
              </li>
              <li className="nav-item" onClick={() => handleItemClick('/skill')}>
                <a className="nav-link mx-3">Skills</a>
              </li>
              <li className="nav-item" onClick={() => handleItemClick('/certificate')}>
                <a className="nav-link mx-3">Certificate</a>
              </li>
              <li className="nav-item" onClick={() => handleItemClick('/contact')}>
                <a className="nav-link mx-3">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
