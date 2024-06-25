import React, { useEffect } from "react";
import img1 from "../../HomePage/images/naidunia13sep11.jpg";
import img2 from "../../HomePage/images/10-SEP-2011-CERT-PRGM-2ND-A.jpg";
import img3 from "../../HomePage/images/hindustan.jpg";
import { Link } from "react-router-dom";

const PressRelease = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="container Allpagemargin">
        <div
          style={{
            padding: "2rem",
            boxShadow: "0px 0px 37px 0px lightgray",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3 style={{ color: "rgb(0, 200, 81)" }}>Press Release</h3>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  style={{ background: "#f2ede9", marginBottom: "1rem" }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Nai Dunia Press | September 13, 2011
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  style={{ background: "#f2ede9", marginBottom: "1rem" }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  AIESEC Press Release | September 10, 2011
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  style={{ background: "#f2ede9", marginBottom: "1rem" }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Global Warming March | October 10, 2007
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    Hindi Press Release on 27/10/2007 on Global Warming March :
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://prothsahanteam.org/Downloads/PressRelease.pdf"
                    >
                      {" "}
                      Click Here
                    </Link>
                  </p>
                  <p>
                    English Press Release on 27/10/2007 on Global Warming March
                    :
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://prothsahanteam.org/Downloads/PressRelease.pdf"
                    >
                      Click Here
                    </Link>
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressRelease;
