import React, { useEffect } from "react";
import consumerProtection from "../../HomePage/images/consumer-protection.jpg";
import { Link } from "react-router-dom";
const ConsumerAwareness = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="container Allpagemargin">
        <div style={{padding:'2rem', boxShadow:'0px 0px 37px 0px lightgray', marginTop:'2rem', marginBottom:'2rem'}}>
          <div>
            <h3 style={{ color: "rgb(0, 200, 81)" }}>
              CONSUMER AWARENESS / PROTECTION CELL
            </h3>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom:'2rem' }}>
            <img
              src={consumerProtection}
              alt="consumer-Protection"
            />
          </div>
          <div className="text-center">
            <h3 style={{ color: "red" }}>
              DON'T SUFFER ANYMORE, KNOW YOUR RIGHTS
            </h3>
            <p>
            Consumber Awareness/Protection Cell
            </p>
            <h3 style={{ color: "red" }}>
            1800-11-4000 & 23381759
            </h3>
            <p>
            (Mediation Centre - Delhi Govt.)
            </p>
            <p>
            OR
            </p>
            <p>
            Send written complaint to
            </p>
            <p>
            <Link to="mailto:info@prothsahanteam.org">info@prothsahanteam.org</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumerAwareness;
