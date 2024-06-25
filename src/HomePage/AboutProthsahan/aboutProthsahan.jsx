import React, { useEffect } from "react";
import icon1 from "../images/proht-icon_1.png";
import icon2 from "../images/proht-icon_2.png";
import icon3 from "../images/proht-icon_3.png";
import icon4 from "../images/proht-icon_4.png";
import icon5 from "../images/proht-icon_5.png";
import "../AboutProthsahan/aboutprothsahan.css";
import volunteerImage from '../images/volunteer-image.jpg'
import img from "../images/about.jpg";
import volentier from '../../HomePage/images/volentier1.png.jpeg'


const aboutProthsahan = () => {
  // useEffect(() => {
  //   window.scrollBy({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <>
      <div className="aboutMainDiv" style={{ background: "#d3d3d342" }}>
        <div className="container">
          <h1 className="text-center mb-4">About Prothsahan Team</h1>
          <h6
            style={{ color: "gray", letterSpacing: "1px" }}
            className="text-center"
          >
            Our mission is to spread awarness among the following field
          </h6>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div>
                <img width="100%" src={img} alt="" />
              </div>
            </div>
            <div className="col-md-6" style={{display:'flex', alignItems:'center'}}>
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <img src={icon1} alt="" />
                    <h6>GREEN ENVIRONMENT</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <img src={icon3} alt="" />
                    <h6>TRAFFIC SENSE</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <img src={icon2} alt="" />
                    <h6>RURAL COMPUTER EDUCATION</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <img src={icon4} alt="" />
                    <h6>DRAIN TREATMENT- AWARENESS</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <img src={icon5} alt="" />
                    <h6>LEPROSY/ NEEDY PEOPLE HELP</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bgimage">
        <div className="overlay">
          <div className="container">
            <div className="row" style={{alignItems:'center', padding:'2rem 0rem'}}>
              <div className="col-md-6">
                <img width='90%' src={volentier} alt="" />
              </div>
              <div className="col-md-6">
                <h1 className="mb-4 heading" style={{ color: "white", fontSize:'50px'}}>
                  Become a Volunteer
                </h1>
                <p
                  className="mb-5"
                  style={{
                    color: "white",
                    lineHeight: "30px",
                    fontSize: "17px",
                  }}
                >
                  Prothsahan Team are self-motivated people of all ages and from
                  different walks of life who give of their time and resources
                  to make positive difference. Come, be a part of Prothsahan
                  Team.
                </p>
                <button
                  style={{
                    background: "green",
                    border:'none'
                  }}
                  className="btn btn-success"
                >
                  Join Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutProthsahan;
