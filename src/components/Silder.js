import React, { useEffect } from "react";
import "../style/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Slider() {
  const items = [
    "assests/slider/slider1.png",
    "assests/slider/slider2.png",
    "assests/slider/slider3.png",
    "assests/slider/slider4.png",
    "assests/slider/slider5.png",
    "assests/slider/slider6.png",
    "assests/slider/slider7.png",
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="mt-5">
      <h3 className="fw-bold mb-5 text-center">
        Trusted by hundreds of progressive brands
      </h3>
      <div className="container">
        <div className="row">
        {items.map((item, index) => (
          <div className="col-6 col-md-3 d-flex align-items-center justify-content-center p-2">
            <img
            src={item}
            key={index}
            alt={`slider ${index + 1}`}
            className="img-fluid"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-duration={`${index + 1}000`}
          />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
