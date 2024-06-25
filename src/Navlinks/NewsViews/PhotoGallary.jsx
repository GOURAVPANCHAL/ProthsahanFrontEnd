import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PhotoGallary = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
    axios
      .get("https://api.prothsahanteam.org/api/gallery")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);


  if (error) return <div>Error loading gallery</div>;

  return (
    <div className="container Allpagemargin">
      <h1 style={{ marginTop: "2rem", marginBottom: "2rem", textAlign: "center" }}>
        Our Gallery
      </h1>
      <div className="row">
        {data.map((item) => (
          <div key={item._id} className="col-md-4">
            <div
              style={{
                padding: "1rem",
                boxShadow: "0px 0px 30px -8px lightgray",
                marginBottom: "2rem",
                borderRadius: "5px",
              }}
            >
              <div
                className="contain"
                style={{
                  width: "100%",
                  height: "30vh",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                <Link to={`/photodetail/${item._id}`}>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {item.images && item.images.slice(0, 1).map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Image ${idx}`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          marginRight: '5px',
                          marginBottom: '5px',
                        }}
                      />
                    ))}
                  </div>
                </Link>
              </div>
              <hr />
              <div>
                <h5>Album Title: {item.title}</h5>
                <h6>{item.description}</h6>
                <div>{item.totalPhoto}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallary;
