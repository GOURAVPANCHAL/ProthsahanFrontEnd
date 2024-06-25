import React, { useEffect } from "react";
import './ourTeam.css'
const OurTeam = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const OurTeam = [
    { name: "FOUNDER", title: "Mr. Alok Vashistha", button: <button className="btn btn-success">SEND MAIL</button> },
    { name: "PRESIDENT", title: "Mr. Vivek Vashistha", button: <button className="btn btn-success">SEND MAIL</button> },
    { name: "SECRETARY", title: "Mr. Sanjay Sinha", button: <button className="btn btn-success">SEND MAIL</button> },
    {
      name: "ENVIRONMENTAL SUPPORT",
      title:
        "Mr. Vivek Agarwal, M Tech (Certified Energy Auditor form BEE, Min of Power, GOI)",
    },
    {
      name: "ADVISORY COMMITTEE",
      title: "Mr. C.M.Sharma - Retd Architect",
      button: "",
    },
    {
      name: "GENERAL BODY MEMBER",
      title1: "Mr. Vivek Bajaj",
      title2: "Mr. Sachin Kaushik",
    },
    { name: "FINANCIAL SUPPORT"},
    {
      name: "MEDICAL SUPPORT",
      title1: "Dr Alok Gupta, MBBS, MS, DNB (ENT)",
      title2: "Dr Monika Gupta, BDS (Dental)",
      title3: "Dr Meenakshi Sarda –Energy Imaging & Research Centre",
    },
    {
      name: "LEGAL SUPPORT",
      title1: "Mr. Anil Pandit- Advocate , Distt Court Ghaziabad",
    },
    {
      name: "EVENT ORGANISING COMMITTEE",
      title1: "Ms. Ritu Vashistha, M Sc, B Ed",
      title2: "Ms. Nidhi Kaushik, MBA",
      title3: "Mr Sanjeev Agarwal",
    },
    {
      name: "ACCOUNTS AUDITOR",
      title: "Rishi K. Sharma & Associates",
      title1: "(Chartered Accountants)",
    },
  ];
  return (
    <div className="container Allpagemargin">
      <div className="row">
        {OurTeam.map((item) => (
          <div className="col-md-4">
            <div style={{borderRadius:'10px', marginBottom:'1rem', padding:'1rem', textAlign:'center', boxShadow:'2px 2px 11px -1px lightgray'}}>
              <h5>{item.name}</h5>
              <p style={{color:'gray'}}>{item.title}</p>
              <p style={{color:'gray'}}>{item.title1}</p>
              <p style={{color:'gray'}}>{item.title2}</p>
              <p style={{color:'gray'}}>{item.title3}</p>
              {/* <p>{item.button}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
