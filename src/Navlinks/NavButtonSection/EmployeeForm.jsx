import React, { useEffect, useState } from "react";
import "../../Navlinks/NavButtonSection/navbutton.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const EmployeeForm = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    jobpost: "",
    qualification: "",
    experience: "",
    packageanual: "",
    organisationname: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    contact: "",
    mobile: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.prothsahanteam.org/api/job",
        formData
      );
      if(response.status===200){
        toast.success("Job Post Successfully")
        // navigate("/employeDetail")
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5 jobpost">
          <h1 style={{ color: "#00C851", marginBottom: "2rem" }}>Post Job</h1>

          <form onSubmit={handleSubmit} action="">
            <div className="row" style={{ lineHeight: "34px" }}>
              <div className="col-md-12">
                <div>
                  <label htmlFor="">Vacancy For (Post)</label>
                  <input
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
                    type="text"
                    name="jobpost"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="">Edu. Qualification</label>
                  <input
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Edu. Qualification"
                    name="qualification"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="">Experience</label>
                  <input
                    onChange={handleChange}
                    required
                    name="experience"
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Experience"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label htmlFor="">Package Offered (annually)</label>
                  <input
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Package Offered (annually)"
                    name="packageanual"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <label htmlFor="">Organization Name</label>
                  <input
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="Organization Name"
                    name="organisationname"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4
                style={{ color: "#ff4444", marginBottom: "2rem" }}
                className="mb-2"
              >
                <u>Location</u>
              </h4>
              <div style={{ lineHeight: "33px" }} className="row">
                <div className="col-md-6">
                  <label htmlFor="">Landmark</label>
                  <input type="text" className="form-control" onChange={handleChange} name="address" id="" />
                  <label htmlFor="">Pin/Zip Code</label>
                  <input
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Pin / Zip Code"
                    name="pincode"
                  />
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">State</label>
                    <input
                      onChange={handleChange}
                      required
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="State"
                      name="state"
                    />
                  </div>
                  <label htmlFor="">City</label>
                  <input
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="City"
                    name="city"
                  />
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="">Contact Person</label>
                    <input
                      onChange={handleChange}
                      required
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Contact"
                      name="contact"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Mobile</label>
                    <input
                      onChange={handleChange}
                      required
                      style={{ width: "100%" }}
                      type="number"
                      placeholder="Mobile"
                      name="mobile"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      onChange={handleChange}
                      required
                      style={{ width: "100%" }}
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mt-3 mb-3" style={{ color: "#ff4444" }}>
                    <u>Terms & Conditions</u>
                  </h3>
                  <ul>
                    <li className="termcondition">
                      I, owner/ partner/ director of the organization hereby
                      certify the above mentioned current reqirement of my
                      office as on today, is confirmed.
                    </li>
                    <li className="termcondition">
                      I would like to thank prothsahanteam effort for putting my
                      requirement on their website free of cost to support youth
                      employment initiative.
                    </li>
                    <li className="termcondition">
                      I will verify all employees with my own resources and I
                      know there is no responsibility of prothsahanteam after
                      providing the resumes.
                    </li>
                  </ul>
                  <div className="text-center">
                    <button className="btn btn-success">Post Job</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeForm;
