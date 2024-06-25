import React, { useEffect, useState } from "react";
import "../NewsViews/news.css";
import pressIcon from "../../HomePage/images/press-release.png";
import imageGallery from "../../HomePage/images/camera.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Events = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.prothsahanteam.org/api/event");
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
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
    <>
      <div className="container Allpagemargin">
        <div
          className="mt-5 mb-5"
          style={{ boxShadow: "0px 0px 37px 0px lightgray", padding: "2rem" }}
        >
          <div>
            <h3 style={{ color: "rgb(0, 200, 81)" }}>Events</h3>
          </div>
          <div
            style={{ width: "100%", overflowX: "auto" }}
            class="table-container"
          >
            <table className="table table-bordered text-center">
              <tr>
                <th>S.No</th>
                <th>Events</th>
                <th>Date</th>
                <th>Press Release</th>
                <th>Image Gallery</th>
              </tr>
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.eventname}</td>
                    <td>{item.eventdate}</td>
                    <td>
                      <Link className="anchor" to={`https://api.prothsahanteam.org/${item.pdf}`} target="_blank">
                      <img className="eventimage" src={pressIcon} alt="press" />
                      </Link>
                     {/* <a href={`https://api.prothsahanteam.org/${item.pdf}`} target="_blank">show pdf</a> */}
                    </td>
                    <td>
                     <Link className="anchor" to={`/showevent/${item._id}`}> <img className="eventimage" src={imageGallery} alt="" /></Link>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
