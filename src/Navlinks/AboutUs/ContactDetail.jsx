import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import QrCode from "../../HomePage/images/qrCode.jpg";
const ContactDetail = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    city: "",
    country: "",
    number: "",
    address: "",
  });

  const getInputdata = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const response = await axios.post(
        "https://api.prothsahanteam.org/api/contact",
        formData
      );
      if (response.status === 200) {
        toast.success("Query send successfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5"
          style={{ boxShadow: "0px 0px 37px 0px lightgray", padding: "2rem" }}
        >
          <div className="row">
            <div className="col-md-6" style={{ lineHeight: "30px" }}>
              {/* <h2 style={{ color: "#00C851", marginBottom: "2rem" }}>
                WRITE TO US
              </h2> */}
              <form onSubmit={handleSubmit} action="">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <label htmlFor="">Name</label>
                      <input
                        onChange={getInputdata}
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <label htmlFor="">Email</label>
                      <input
                        onChange={getInputdata}
                        style={{ width: "100%" }}
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label htmlFor="">Subject</label>
                      <input
                        onChange={getInputdata}
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label htmlFor="">Message</label>
                      <textarea
                        onChange={getInputdata}
                        name="message"
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label htmlFor="">City</label>
                      <input
                        onChange={getInputdata}
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="City"
                        name="city"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label htmlFor="">Country</label>
                      <select
                        style={{ width: "100%" }}
                        id="country"
                        name="country"
                        onChange={getInputdata}
                      >
                        <option value="Select a Country">
                          Select a Country
                        </option>
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
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label htmlFor="">Phone No.</label>
                      <input
                        onChange={getInputdata}
                        style={{ width: "100%" }}
                        type="number"
                        placeholder="1234 567 899"
                        name="number"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label htmlFor="">Address</label>
                      <textarea
                        onChange={getInputdata}
                        name="address"
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <button className="btn btn-success mt-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-md-6"
              style={{ borderLeft: "1px solid lightgray" }}
            >
              <div className="container">
                <h2 style={{ color: "#00C851", marginBottom: "2rem" }}>
                  <b>
                    <u>Regd. Address</u>
                  </b>
                </h2>
                <p>
                  <b>Address : </b>T-301, 3rd Floor, Chetak Complex, LSC, Pocket
                  B & E Dilshad Garden, Delhi - 110095. INDIA
                </p>
                <hr />
                <h4 style={{ color: "#ff4444", marginBottom: "2rem" }}>
                  <u>Branch Office(s)</u>
                </h4>
                <div className="mb-5">
                  <h3 className="mb-4">
                    <u>ROHTAK (HARYANA)</u>
                  </h3>
                  <p>
                    <span>
                      <b>Contact Person : </b>
                    </span>
                    Ms Rachna Bajaj
                  </p>
                  <p>
                    <span>
                      <b>Address :</b>
                    </span>
                    126, Sect -1 , Rohtak, Haryana
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4">
                    <u>GURGAON (HARYANA)</u>
                  </h3>
                  <p>
                    <span>
                      <b>Contact Person : </b>
                    </span>
                    Mr Vipin Tyagi
                  </p>
                  <p>
                    <span>
                      <b>Address :</b>
                    </span>
                    N-300, Ist floor, Mayfield Gdn, Sec-51, Gurgaon
                  </p>
                  <p>
                    <b>Tel :</b> 91-9818140741
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
