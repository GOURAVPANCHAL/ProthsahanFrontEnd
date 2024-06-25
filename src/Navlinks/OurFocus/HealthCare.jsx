import React from "react";
import pdf1 from '../../HomePage/images/healthcarepdf1.pdf'
import pdf2 from '../../HomePage/images/healthcarepdf2.pdf'
import pdf3 from '../../HomePage/images/healthcarepdf3.pdf'
import pdf4 from '../../HomePage/images/healthcarepdf4.pdf'
import pdf5 from '../../HomePage/images/healthcarepdf5.pdf'

const HealthCare = () => {
  return (
    <>
      <div className="container Allpagemargin">
        <div
          style={{
            padding: "2rem",
            boxShadow:'0px 0px 37px 0px lightgray',
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h3 style={{ color: "rgb(0, 200, 81)" }}>HEALTH CARE AWARENESS</h3>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  style={{ background: "#f2ede9", marginBottom:'1rem' }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Anti Smoking Drive To Prevent Cancer
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                   <iframe width='100%' height='500vh' src={pdf1} title="Pdf" allowfullscreen></iframe>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                style={{ background: "#f2ede9", marginBottom:'1rem' }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Laryngectmy Care Club
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                <iframe width='100%' height='500vh' src={pdf2} title="Pdf" allowfullscreen></iframe>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                style={{ background: "#f2ede9", marginBottom:'1rem' }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Laryngectmy Care Club Member Form
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                <iframe width='100%' height='500vh' src={pdf3} title="Pdf" allowfullscreen></iframe>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                style={{ background: "#f2ede9", marginBottom:'1rem' }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Oral Hygiene To Prevent Heart Diesces & Diabetes
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                <iframe width='100%' height='500vh' src={pdf4} title="Pdf" allowfullscreen></iframe>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                style={{ background: "#f2ede9", marginBottom:'1rem' }}
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Diabetic Foot Care Option
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                <iframe width='100%' height='500vh' src={pdf5} title="Pdf" allowfullscreen></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthCare;
