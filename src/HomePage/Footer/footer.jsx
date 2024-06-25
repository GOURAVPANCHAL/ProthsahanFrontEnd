import React from "react";
import sponser1 from "../images/sponser1.jpg";
import sponser2 from "../images/sponser2.jpg";
import sponser3 from "../images/sponser3.jpg";
import sponser4 from "../images/sponser4.jpg";
import "../Footer/footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <footer
        style={{ background: "#32302F", paddingTop: "2rem", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <ul>
                <li>
                  <Link href="/">Aim and Objective</Link>
                </li>
                <li>
                  <Link href="/">Join Us</Link>
                </li>
                <li>
                  <Link href="/ourTeam">Our Team</Link>
                </li>
                <li>
                  <Link href="/contact-detail">Contact Detail</Link>
                </li>
              </ul>

              <h3 className="mt-5">News and Views</h3>
              <ul>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/press-release">Press Release</Link>
                </li>
                <li>
                  <Link href="/donar">List Of Donor</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <h3>Our Sponser</h3>
              <div className="row">
                <div className="col-md-6">
                  <img className="footerImage" width='100%' src={sponser1} alt="" />
                </div>
                <div className="col-md-6">
                  <img width='100%' src={sponser2} alt="" />
                </div>
                <p>&nbsp;</p>
                <div className="col-md-6">
                  <img className="footerImage" width='100%' src={sponser3} alt="" />
                </div>
                <div className="col-md-6">
                  <img className="footerImage" width='100%' src={sponser4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Reach Us</h3>
              <div>
                <iframe
                  width="100%"
                  height="345"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3088610267127!2d77.31472821508366!3d28.680406082398946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba7146aaaab%3A0x3365d532184e949e!2sProthsahan+Team!5e0!3m2!1sen!2s!4v1502185834778"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer style={{background:'#d3d3d359', padding:'1rem'}} className="pt-4">
        <div className="container">
          <div className="footerBottom" style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <p>
              Copyright © 2017 <span style={{color:'#007E33'}}>Prothsahan Team</span> - Together Everyone Achieve More. All rights reserved.
              </p>
            </div>
            <div>
              <p>
                <b>
              Designed By <Link target="_blank" to={'https://www.digiindiasolutions.com/'}>Digi India Solution</Link>
                </b>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
