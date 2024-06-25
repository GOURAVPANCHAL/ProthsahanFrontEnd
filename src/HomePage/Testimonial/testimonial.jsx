import React, { useEffect } from "react";
import Slider from "react-slick";
import '../Testimonial/testimonial.css'
const testimonial = () => {
  // useEffect(() => {
  //   window.scrollBy({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div
      style={{
        background: "#28282B",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        color: "white",
      }}
    >
      <div className="container">
        <div className="slider-container">
          <h1 className="text-center mb-5">Testimonial</h1>
          <Slider {...settings}>
            <div>
              <div className="content">
                <h3 className="mb-5">Volunteer Speak</h3>
                <blockquote className="mb-5">
                  <i>
                    Working with Prothsahan team has been a very revealing and
                    enriching experience. I realized that there are many small
                    things that can be done to contribute to child rights. Yes,
                    what is needed is a bit of sensitivity and willingness to do
                    something worthwhile.
                  </i>
                </blockquote>
                <h5>SATYAM GUPTA</h5>
                <span>(Volunteer, Delhi)</span>
              </div>
            </div>
            <div>
              <div className="content">
                <h3 className="mb-5">Donor Speak</h3>
                <blockquote className="mb-5">
                  <i>
                    Changing the lives of children is a continuous process.
                    Nothing can be done in a limited period. As individuals we
                    have to continue to give support by way of financial help,
                    time as well as other resources. I believe in continuity and
                    devotion without deviation. Prothsahan team is doing just
                    that.
                  </i>
                </blockquote>
                <h5>SH.S.K. DHAWAN</h5>
                <span>(Donor, Delhi)</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
