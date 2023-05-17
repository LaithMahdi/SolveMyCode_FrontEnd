import React, { useEffect } from "react";
import "../style/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Slider() {
  const items = [
    "fa-brands fa-java",
    "fa-brands fa-square-js",
    "fa-brands fa-node-js",
    "fa-brands fa-html5",
    "fa-brands fa-docker",
    "fa-brands fa-php",
    "fa-brands fa-python",
    "fa-brands fa-angular",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="mt-5 p-5">
      <h3 className="fw-bold mb-5 text-center">
        Trusted by hundreds of progressive brands
      </h3>
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-6 col-md-3 d-flex align-items-center justify-content-center p-2">
              <i
                className={item}
                id="icon"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-delay="400"
                data-aos-duration={`${index + 1}000`}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
