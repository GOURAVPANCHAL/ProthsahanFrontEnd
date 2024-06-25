import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditJobDetails = () => {
    const navigate = useNavigate()
    const { _id } = useParams();
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

    const getApiData = async () => {
        try {
            let res = await axios.get(`https://api.prothsahanteam.org/api/job/${_id}`);
            setFormData(res.data.data);
            if(res.status===200){
                toast.success("Deta Update Successfully")
            }
        } catch (error) {
            toast.success("error")
            console.log(error);
        }
    };

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
            const response = await axios.put(`https://api.prothsahanteam.org/api/job/${_id}`, formData);
            if (response.status === 200) {
                toast.success("Job Update Successfully")
                navigate("/employeDetail")
            }
        } catch (error) {
            console.error("Error submitting data:", error);
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
                <h1 style={{ color: "#00C851", marginBottom: "2rem" }}>Edit Job</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row" style={{ lineHeight: "34px" }}>
                        <div className="col-md-12">
                            <div>
                                <label htmlFor="">Vacancy For (Post)</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="jobpost"
                                    style={{ width: "100%" }}
                                    value={formData.jobpost}
                                    required
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
                                    value={formData.qualification}
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
                                    value={formData.experience}
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
                                    value={formData.packageanual}
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
                                    value={formData.organisationname}
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
                                <label htmlFor="">Address</label>
                                <textarea
                                    className="form-control"
                                    onChange={handleChange}
                                    name="address"
                                    required
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    value={formData.address}
                                ></textarea>
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
                                        value={formData.state}
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
                                    value={formData.city}
                                />
                                <label htmlFor="">Pin/Zip Code</label>
                                <input
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%" }}
                                    type="number"
                                    placeholder="Pin / Zip Code"
                                    name="pincode"
                                    value={formData.pincode}
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
                                        value={formData.contact}
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
                                        type="text"
                                        placeholder="Mobile"
                                        name="mobile"
                                        value={formData.mobile}
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
                                        value={formData.email}
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
                                    <button className="btn btn-success">Edit Job Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditJobDetails;
