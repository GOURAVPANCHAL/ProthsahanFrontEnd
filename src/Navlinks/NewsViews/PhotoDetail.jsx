import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotoDetail = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);

  const getApiData = async () => {
    try {
      let res = await axios.get(
        "https://api.prothsahanteam.org/api/gallery/" + _id
      );
      console.log(res);
      setData(res.data.data);
      setImages(res.data.data.images); // Assuming the images are in res.data.data.images
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
        <div className="mb-5">
          <div className="row">
            <div className="col-md-12 mb-2">
              <h1 style={{color:'green'}}>
                <u>
                {data.title}
                </u>
                </h1>
            </div>
            <div className="row">
              {images && images.length > 0 ? (
                images.map((image, idx) => (
                  <div key={idx} className="col-md-4 mb-4">
                    <img width={"100%"} src={image} alt={`Image ${idx + 1}`} />
                  </div>
                ))
              ) : (
                <div className="col-md-12">
                  <p>No images available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDetail;
