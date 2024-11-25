import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import data from "../data";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../../Images/rokna2.png";
import pic2 from "../../Images/chair.png";
import pic3 from "../../Images/chair2.png";
import pic4 from "../../Images/rokna.png";

export default function Details() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [location]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

  const images = [pic1, pic2, pic3, pic4];

  const settingsMain = {
    asNavFor: thumbnailSlider.current,
    ref: mainSlider,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsThumbnails = {
    asNavFor: mainSlider.current,
    ref: thumbnailSlider,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: false,
    infinite: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="text-end pe-5">
              <h2 className="fw-bold">ركنة كول ثنائية </h2>
              <h5 className="fw-medium pt-3">
                <h5 className="ps-2 fw-bold">14,000 LE</h5>
              </h5>
              <div className="row">
                <div className="col-md-8">
                  <button className="fw-medium ms-5 disc">خصم %14</button>
                </div>
                <div className="col-md-4">
                  <p className="text-decoration-line-through fw-medium">
                    15,960 LE
                  </p>
                </div>
              </div>
              <p>! لقد وفرت 1960 جنيه</p>
              <h4>:الوصف</h4>
              <p>
                طاولة قهوة بيضاوية ذات تصميم عصري وأنيق، مصنوعة من خشب طبيعي
                بلون خشبي يجمع بين الرمادي والأسود. بأبعاد مثالية، تضيف لمسة
                عصرية راقية إلى أي مساحة
              </p>
              <h4>:تفاصيل المنتج</h4>
              <div>
                <span>اللون : احمر</span>
                <br />
                <span>الالوان المتاحة : احمر-ابيض-اسود</span>
                <br />
                <span>الخامه : خشب زان</span>
                <br />
                <span>المقاس : متوسط</span>
                <br />
                <span>الابعاد : 50*60*70 سم</span>
                <br />
                <span>النوع : عصري</span>
                <h4 className="pt-3">:المواصافات الخاصه</h4>
                <span>تفتح كسرير -</span>
                <br />
                <span>بها سحاره للتخزين -</span>
                <br />
                <span>بها حامل اكواب -</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Slider {...settingsMain}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </div>
              ))}
            </Slider>
            <div className="ps-4" style={{ marginTop: "16px" }}>
              <Slider {...settingsThumbnails}>
                {images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      style={{
                        width: "80%",
                        height: "80px",
                        objectFit: "cover",
                        border:
                          index === currentSlide ? "2px solid #000" : "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="text-center pt-5 fw-bolder mt-4">
          <h2>المنتجات الموصى بها</h2>
        </div>
        <div className="row">
          {data.slice(0, 4).map((item, index) => (
            <div className="col-md-3 py-5" key={index}>
              <div
                className="card card-hover"
                style={{ width: "16rem", position: "relative" }}
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
      </div>
    </>
  );
}
