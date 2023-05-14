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
    <div className="text-center mb-5">
      <h3 className="fw-bold mb-5">
        Trusted by hundreds of progressive brands
      </h3>
      {items.map((item, index) => (
        <div className="d-inline mx-5">
          <img
            src={item}
            key={index}
            alt={`slider ${index + 1}`}
            className=""
            data-aos="fade-down"
     data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-duration={`${index+1}000`}
          />
        </div>
      ))}
    </div>
  );
}
