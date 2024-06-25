import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowEvent = () => {
  const param = useParams();
  console.log(param);
  const [data, setData] = useState({});

  const getApiData = async () => {
    try {
      let res = await axios.get(
        "https://api.prothsahanteam.org/api/event/" + param._id
      );
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
    <div className="container mb-5">
      <div className="Allpagemargin">
        <div>
          <h2 style={{ color: "rgb(0, 200, 81)" }}>{data.name}</h2>
          <h4>{data.address}</h4>
        </div>
        <div className="row">
          {data.image && (
            <div className="col-md-6">
              <img src={data.image} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image1 && (
            <div className="col-md-6">
              <img src={data.image1} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image2 && (
            <div className="col-md-6">
              <img src={data.image2} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image3 && (
            <div className="col-md-6">
              <img src={data.image3} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image4 && (
            <div className="col-md-6">
              <img src={data.image4} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image5 && (
            <div className="col-md-6">
              <img src={data.image5} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image6 && (
            <div className="col-md-6">
              <img src={data.image6} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image7 && (
            <div className="col-md-6">
              <img src={data.image7} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image8 && (
            <div className="col-md-6">
              <img src={data.image8} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image9 && (
            <div className="col-md-6">
              <img src={data.image9} alt="image" width="100%" height="100%" />
            </div>
          )}
          {data.image10 && (
            <div className="col-md-6">
              <img src={data.image10} alt="image" width="100%" height="100%" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
