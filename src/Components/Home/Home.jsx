import React from "react";
import data from "../data";
import { useNavigate } from "react-router-dom";
import offer from "../../Images/WhatsApp Image 2024-11-20 at 5.36.44 PM 1 (1).png";
import homeoic from "../../Images/homepic.png";
import home1 from "../../Images/home1.jpeg";
import home2 from "../../Images/home2.jpeg";
import home3 from "../../Images/home3.jpeg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="containerr">
        {/* <div className="pt-5">
          <img src={blackf} alt="offers" className="w-100 rounded-5 " />
        </div> */}
        <div class="card mb-3 mt-5 ">
          <img src={homeoic} class="card-img-top rounded-3" alt="..." />
        </div>
        <div className="row pt-4">
          <div className="col-md-6 ps-5">
            <div className="offers">
              <img src={offer} alt="" className="w-100 rounded-5 " />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="offers">
              <img src={offer} alt="" className="w-100 rounded-5" />
            </div>
          </div>
        </div>
        <div className="text-center mt-5 pt-5">
          <h2 className="fw-bolder">اقوى العروض</h2>
        </div>
        <div className="row">
          {data.slice(0, 4).map((item, index) => (
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
        <div className="row pt-4">
          <div className="col-md-4">
            <div className="home">
              <img src={home2} alt="" className="w-100 rounded-5 " />
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="home">
              <img src={home1} alt="" className="w-100 rounded-5" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="home">
              <img src={home3} alt="" className="w-100 rounded-5" />
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mt-5 pt-5">
            <h2 className="fw-bolder">منتجات موصى بها</h2>
          </div>
          <div className="row">
            {data.slice(0, 4).map((item, index) => (
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
                        {item.newPrice
                          ? `${item.newPrice}LE`
                          : `${item.price}LE`}
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
        </div>
      </div>
    </>
  );
}
