import React, { useEffect, useState } from "react";
import "../Navbar/navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo1.png";
// import yuth from '../../HomePage/images/yemp.jpg'
import yuth from "../../HomePage/images/yuth.png";

const Navbar = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const click = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
      <nav
        style={{
          width: "100%",
          zIndex: "1",
          background: "#2f4f4ff2",
          top: "0",
          position: "fixed",
          padding: "1rem 1rem",
        }}
        className="navbar navbar-expand-lg"
      >
        <div className="navmain">
          <div className="divmain" style={{textAlign:'center', display:'flex'}}>
            <Link className="logo" to={"/"} onClick={closeNav}>
              <img width="115%" src={logo} alt="logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={open ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={click}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "end", border: "none" }}
          className="container-fluid"
        >
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navbarSupportedContent">
            <ul
              style={{ justifyContent: "space-between" }}
              className="navbar-nav me-auto mb-2 mb-lg-0 m-auto"
            >
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}
                  onClick={closeNav}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/aimAndObjective" onClick={closeNav}>
                      Aim and objective
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to={"/join-us"} onClick={closeNav}>
                      Join Us
                    </Link>
                  </li> */}
                  <li>
                    <Link className="dropdown-item" to="/ourTeam" onClick={closeNav}> 
                      Our Team
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to={"/contact-detail"} onClick={closeNav}>
                      Contact Detail
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/presedentMessage" onClick={closeNav}>
                  President's Message
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Focus
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/health-care-awareness" onClick={closeNav}>
                      Health Care Awareness
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/trafic-sence" onClick={closeNav}>
                      Traffic Sence
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/consumer-awareness" onClick={closeNav}>
                      Consumer Awareness
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={closeNav}>
                      Rain Harvesting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={closeNav}>
                    CPR (cardio pulmonary resuscitation)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={closeNav}>
                    life saving skill
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News And Views
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={"/events"} onClick={closeNav}>
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/press-release" onClick={closeNav}>
                      Press Release
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/photo" onClick={closeNav}>
                      Photo Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"#"}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FAQ
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about-Global-Warming" onClick={closeNav}>
                      About Global Warming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about-Organ-Donating" onClick={closeNav}>
                      About Organ Donating
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/contact-detail"} className="nav-link" onClick={closeNav}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center yuth">
            <img width='70%' src={yuth} alt="" />
          </div>
          <div className="d-flex">
            <Link style={{ marginRight: "10px" }} to={"/employeForm"} onClick={closeNav}>
              <button className="button" style={{ background: "green" }}>
                Employer Zone
              </button>
            </Link>
            <Link to={"/employeDetail"} onClick={closeNav}>
              <button className="button" style={{ background: "green" }}>
                Employee Zone
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
