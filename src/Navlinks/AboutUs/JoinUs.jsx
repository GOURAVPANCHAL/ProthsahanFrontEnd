import React, { useEffect, useState } from "react";
import "../AboutUs/ourTeam.css";
import axios from "axios";
import toast from "react-hot-toast";


const JoinUs = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [data, setData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dob: "",
    panNo: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    citizenship: "",
    helpMessage: "",
    name1: "",
    name2: "",
    occupation1: "",
    occupation2: "",
    address1: "",
    address2: "",
    number1: "",
    number2: "",
    email1: "",
    email2: ""

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://api.prothsahanteam.org/api/join", data)
      console.log(res)
      if(res.status===200){
        toast.success("Form Submited Successfully")
      }
    } catch (error) {
      toast.error("Please Fill All Fields")
      console.log(error)
    }
  };
  return (
    <div className="Allpagemargin">
      <div
        style={{ padding: "1rem", background: "brown", textAlign: "center" }}
      >
        <h1 style={{ color: "white" }}>MEMBERSHIP FORM</h1>
      </div>
      <div className="container">
        <div
          className="mt-5 mb-5"
          style={{ padding: "2rem", boxShadow: "0px 0px 37px 0px lightgray" }}
        >
          <h4 style={{ color: "#ff4444", marginBottom: "2rem" }}>
            <u>Personal Detail</u>
          </h4>
          <form action="" onSubmit={formSubmit}>
            <div className="row" style={{ lineHeight: "34px" }}>
              <div className="col-md-2 col-sm-12">
                <div>
                  <label htmlFor="">Title</label>
                  <select
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    name="title"
                    id=""
                  >
                    <option value="Select">Select</option>
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5 col-6">
                <div>
                  <label htmlFor="">First Name*</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="firstName"
                  />
                </div>
              </div>
              <div className="col-md-5 col-6">
                <div>
                  <label htmlFor="">Last Name*</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="lastName"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="">Date Of Birth</label>
                <input type="date" name="dob" id="" className="form-control" onChange={handleChange} />
              </div>
              <div className="col-md-6 col-6">
                <label htmlFor="">PAN No.</label>
                <div>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="panNo"
                  />
                </div>
              </div>
              <div className="col-md-6 col-6">
                <label htmlFor="">Email:</label>
                <input
                  onChange={handleChange}
                  name="email"
                  style={{ width: "100%" }}
                  type="email"
                />
              </div>
              <div className="col-md-6 col-6">
                <label htmlFor="">Mobile No.</label>
                <input
                  onChange={handleChange}
                  name="mobile"
                  style={{ width: "100%" }}
                  type="text"
                />
              </div>
            </div>

            <div className="mt-5">
              <h4
                style={{ color: "#ff4444", marginBottom: "2rem" }}
                className="mb-2"
              >
                <u>Contact Detail</u>
              </h4>
              <div style={{ lineHeight: "33px" }} className="row">
                <div className="col-md-6 textArea">
                  <label htmlFor="">Address</label>
                  <textarea
                    onChange={handleChange}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="address"
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label for="country">Choose a country:</label>
                  <select
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    id="country"
                    name="country">
                    <option value="afghanistan">Afghanistan</option>
                    <option value="argentina">Argentina</option>
                    <option value="australia">Australia</option>
                    <option value="brazil">Brazil</option>
                    <option value="canada">Canada</option>
                    <option value="china">China</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="india">India</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="italy">Italy</option>
                    <option value="japan">Japan</option>
                    <option value="mexico">Mexico</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="russia">Russia</option>
                    <option value="saudi_arabia">Saudi Arabia</option>
                    <option value="south_africa">South Africa</option>
                    <option value="south_korea">South Korea</option>
                    <option value="united_kingdom">United Kingdom</option>
                    <option value="united_states">United States</option>
                  </select>

                  <div>
                    <label htmlFor="">State</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="state"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">City</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="city"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Pin/Zip Code</label>
                  <input
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    type="text"
                    name="pinCode"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Citizenship</label>
                  <select
                    onChange={handleChange}
                    style={{ width: "100%" }}
                    name="citizenship"
                    id=""
                  >
                    <option value="Select">Select</option>
                    <option value="Indian Resident">Indian Resident</option>
                    <option value="Non Resident Indian">
                      Non Resident Indian
                    </option>
                    <option value="Foreign National">Foreign National</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="">
                    How Can I Help You <b>Prothsahan Team</b>
                  </label>
                  <textarea
                    onChange={handleChange}
                    name="helpMessage"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="row mt-5" style={{ lineHeight: "33px" }}>
                <div className="col-md-6">
                  <div
                    style={{
                      background: "#ffbb33",
                      padding: "1rem",
                      textAlign: "center",
                      color: "white",
                      alignItems: "center",
                    }}
                  >
                    Reference 1
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      background: "#ffbb33",
                      padding: "1rem",
                      textAlign: "center",
                      color: "white",
                      alignItems: "center",
                    }}
                  >
                    Reference 2
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="name1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="name2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Occupation</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="occupation1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Occupation</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="occupation2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Address</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="address1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Address</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="address2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Contact No.</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="number1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Contact No.</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="text"
                      name="number2"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="email"
                      name="email1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      type="email"
                      name="email2"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-5">
                  <div className="text-center">
                    <button
                      style={{ width: "40%", padding: "1rem 4rem" }}
                      className="btn btn-danger"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
