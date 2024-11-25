import React from "react";
import data from "../data";
import { useNavigate } from "react-router-dom";

export default function AllData() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-3 py-5" key={index}>
              <div
                className="card card-hover"
                style={{
                  width: "16rem",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/details")}
              >
                {/* Conditional Discount Badge */}
                {item.discount && (
                  <div className="discount-badge">{item.discount}</div>
                )}

                {/* Furniture Image */}
                <img
                  src={item.images.image1}
                  className="card-img-top zoom-img"
                  alt={item.name}
                />

                {/* Card Body */}
                <div className="card-body bodyy">
                  <h6 className="card-title text-end fw-bold">{item.name}</h6>
                  <p className="card-text text-end ">
                    <span className="fw-bold">
                      {item.newPrice ? `${item.newPrice}LE` : `${item.price}LE`}
                    </span>
                    {item.newPrice && (
                      <span className="textline ps-2">{`${item.price} LE`}</span>
                    )}
                  </p>

                  {/* Original Price if New Price Exists */}
                  {/* {item.newPrice && (
                    <p className="card-text text-end textline">{`${item.price} LE`}</p>
                  )} */}

                  <a href="#" className="btn btn-warning btnn">
                    اضف الى المفضله
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="row">
          <div className="col-md-3 py-5">
            <div
              className="card card-hover"
              style={{ width: "16rem", position: "relative" }}
            >
              <div className="discount-badge">30%</div>
              <img src={pic3} className="card-img-top zoom-img" alt="..." />
              <div className="card-body bodyy">
                <h6 className="card-title text-end fw-bold">
                  ركنه الوان متعدده
                </h6>
                <p className="card-text text-end padding fw-bold">3500 LE</p>
                <p className="card-text text-end textline">5000 LE</p>
                <a href="#" className="btn btn-warning btnn ">
                  اضف الى المفضله
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
