import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const EmployeeDetail = () => {
  const [data, setData] = useState([]);
  const [checkedId, setCheckedId] = useState(null); // State to track the checked checkbox
  const [filldata, setFilldata] = useState({
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
    empname: "",
    empemail: "",
    resume: "",
    empnumber:""
  });

  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.prothsahanteam.org/api/job");
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFiledata = (event) => {
    const { name, files } = event.target;
    setFilldata({ ...filldata, [name]: files[0] });
  };

  const getInputData = (e) => {
    const { name, value } = e.target;
    setFilldata({ ...filldata, [name]: value });
  };

  const handleClickChecked = async (_id) => {
    try {
      const res = await axios.get("https://api.prothsahanteam.org/api/job/" + _id);
      const jobDetails = res.data.data;
      setFilldata({
        ...filldata,
        jobpost: jobDetails.jobpost,
        qualification: jobDetails.qualification,
        experience: jobDetails.experience,
        packageanual: jobDetails.packageanual,
        organisationname: jobDetails.organisationname,
        address: jobDetails.address,
        state: jobDetails.state,
        city: jobDetails.city,
        pincode: jobDetails.pincode,
        contact: jobDetails.contact,
        mobile: jobDetails.mobile,
        email: jobDetails.email,
      });
      setCheckedId(_id); // Update the checkedId state
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const sendDataEmp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(filldata).forEach((key) => {
      formData.append(key, filldata[key]);
    });

    try {
      let res = await axios.post("https://api.prothsahanteam.org/api/emp", formData);
      console.log(res);
      if (res.status === 200) {
        toast.success("Job Applied Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };
  useEffect(() => {
    getApiData();
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  
  return (
    <div className="container Allpagemargin">
      <div
        className="mt-5 mb-5"
        style={{ boxShadow: "0px 0px 37px 0px lightgray", padding: "2rem" }}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 style={{ color: "#00C851", marginBottom: "2rem" }}>
              Youth Empowerment (Job seekers can apply)
            </h1>
            <ul>
              <li style={{ listStyle: "disc !important" }}>
                ProthsahanTEAM works for YOUTH EMPOWERMENT and offers following jobs.
              </li>
              <li style={{ listStyle: "disc !important" }}>
                Job seekers can apply online here.
              </li>
              <h5 className="mt-3">
                Select the organization to which you want to send resume.
              </h5>
            </ul>
            <div style={{ width: "100%", overflowX: "auto" }} className="table-container">
              <table className="table table-bordered" width="100%">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Select Vacancy</th>
                    <th>Post Vacancy</th>
                    <th>Qualification</th>
                    <th>Experience</th>
                    <th>Package Offered</th>
                    <th>Organization Name</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={checkedId === item._id}
                          onChange={() => handleClickChecked(item._id)}
                        />
                      </td>
                      <td>{item.jobpost}</td>
                      <td>{item.qualification}</td>
                      <td>{item.experience} Year</td>
                      <td>{item.packageanual} rs</td>
                      <td>{item.organisationname}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
             
              <form onSubmit={sendDataEmp}>
                <div className="row">
                <h5 className="mt-5 mb-5"><b> Please Provide Your Detail. </b></h5>
                  <div className="col-md-6">
                  <label
                      htmlFor="empname"
                      className="form-label"
                    >
                      Employee Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="empname"
                      placeholder="Employee Name"
                      name="empname"
                      value={filldata.empname}
                      onChange={getInputData}
                    />
                    <label
                      htmlFor="empemail"
                      className="form-label"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="empemail"
                      placeholder="Email ID"
                      name="empemail"
                      value={filldata.empemail}
                      onChange={getInputData}
                    />
                  </div>
                  
                  <div className="col-md-6">
                
                      <label
                      htmlFor="empemail"
                      className="form-label"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="empemail"
                      placeholder="Contact No"
                      name="empnumber"
                      value={filldata.empnumber}
                      onChange={getInputData}
                    />
                    <div>
                      <label htmlFor="">Resume</label>
                      <input
                        className="form-control mt-2"
                        type="file"
                        id="formFile"
                        accept="application/pdf"
                        name="resume"
                        onChange={getFiledata}
                      />
                      <div className="mt-1">
                      <p>Resume: Please Upload PDF Only</p>
                    </div>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-success mt-3">
                          Apply Online
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
