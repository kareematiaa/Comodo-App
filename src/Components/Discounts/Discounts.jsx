import React from "react";
import data from "../data";
import { useNavigate } from "react-router-dom";

export default function Discounts() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          {data
            .filter((item) => item.discount) // Filter items with discounts
            .map((item, index) => (
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
                  <div className="discount-badge">{item.discount}</div>

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
                        {item.newPrice
                          ? `${item.newPrice}LE`
                          : `${item.price}LE`}
                      </span>
                      {item.newPrice && (
                        <span className="textline ps-2">{`${item.price} LE`}</span>
                      )}
                    </p>

                    <a href="#" className="btn btn-warning btnn">
                      اضف الى المفضله
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
