import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import newsCard1 from "../images/newsCard1.jpg";
import newsCard2 from "../images/newsCard2.jpg";
import newsCard3 from "../images/newsCard3.jpg";
import newsCard4 from "../images/newsCard4.jpg";
import newsCard5 from "../images/newsCard5.jpg";
import newsCard6 from "../images/newsCard6.jpg";
import vote from "../images/vote.jpg";
import "../../HomePage/News-Compaign/news.css";

const newsCompaign = () => {
  // useEffect(() => {
  //   window.scrollBy({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        style={{
          background: "#d3d3d369",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <div className="container">
          <h1 className="text-center mt-5 mb-4">News, Compaigns and Events</h1>

          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="text-center p-3">
                  <div className="cardd">
                    <img
                      className="zoomImage"
                      style={{ width: "100%" }}
                      src={newsCard1}
                      alt=""
                    />
                    <h6 className="mt-3">AWARENESS GLOBAL WARMING </h6>
                    <Link to={"/global-warming"}>
                      <button
                        className="btn btn-success mt-2"
                        style={{
                          background: "#00C851",
                          color: "white",
                          border: "none",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center p-3">
                  <div className="cardd">
                    <img
                      className="zoomImage"
                      style={{ width: "100%" }}
                      src={newsCard2}
                      alt=""
                    />
                    <h6 className="mt-3">TRAFFIC AWARENESS</h6>
                    <Link to={"/trafic-sence"}>
                      <button
                        className="btn btn-success mt-3"
                        style={{
                          background: "#00C851",
                          color: "white",
                          border: "none",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center p-3">
                  <div className="cardd">
                    <img
                      className="zoomImage"
                      style={{ width: "100%" }}
                      src={newsCard3}
                      alt=""
                    />
                    <h6 className="mt-3">AWARENESS OF EYE DONATION</h6>
                    <Link to={"/health-care-awareness"}>
                      <button
                        className="btn btn-success mt-3"
                        style={{
                          background: "#00C851",
                          color: "white",
                          border: "none",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center p-3">
                  <div className="cardd">
                    <img
                      className="zoomImage"
                      style={{ width: "100%" }}
                      src={newsCard4}
                      alt=""
                    />
                    <h6 className="mt-3">BLOOD DONATION</h6>
                    <Link to={"/health-care-awareness"}>
                      <button
                        className="btn btn-success mt-3"
                        style={{
                          background: "#00C851",
                          color: "white",
                          border: "none",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center p-3">
                  <div className="cardd">
                    <img
                      className="zoomImage"
                      style={{ width: "100%" }}
                      src={newsCard5}
                      alt=""
                    />
                    <h6 className="mt-3">SAY NO TO TOBACO</h6>
                    <Link to={"/health-care-awareness"}>
                      <button
                        className="btn btn-success mt-3"
                        style={{
                          background: "#00C851",
                          color: "white",
                          border: "none",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-center p-3">
                  <div className="cardd">
                    <img
                      className="zoomImage"
                      style={{ width: "100%" }}
                      src={newsCard6}
                      alt=""
                    />
                    <h6 className="mt-3">
                      CONZERVE with AIESEC Delhi University
                    </h6>
                    <Link to={"/health-care-awareness"}>
                      <button
                        className="btn btn-success mt-3"
                        style={{
                          background: "#00C851",
                          color: "white",
                          border: "none",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      <h1 className="text-center mt-5 mb-2">Cast Your Vote</h1>
      </div>
      <div className="contentt">
        <div className="hindiContentOverlay">
          <div className="mainContent">
            <p className="heading">
              आपका वोट बहुमूल्य है अपने हक का प्रयोग करे ।
            </p>
            <p className="description">वोट से संबंधित किसी जानकारी के लिए संपर्क करें</p>
            <Link to="/contact-detail">
            <button className="btn clickme">Click Here</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default newsCompaign;
