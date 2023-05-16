import { Link } from "react-router-dom";
import Silder from "../components/Silder";
import Blog from "../components/Blog";
import Faqs from "../components/Faqs";
import React, { useEffect } from "react";
import AOS from "aos";
import "../style/style.css";
import Contact from "../components/Contact";
import FooterCop from "../components/FooterCop";

function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="mt-5">
      <div
        className="row d-flex justify-content-center align-items-center"
        id="header"
      >
        <div className="col-md-8 col-lg-8 col-sm-8 col-12 ">
          <div className="box ms-5">
            <h1 className="fw-bolder " data-aos="fade-right"  data-aos-delay="300"
              data-aos-duration="3000"
              data-aos-easing="ease-in-sine" id="titleHeader">Hello developer ...</h1>
            <p>
              We're a problem-solving website with a team of experts who offer
              solutions for a variety of issues. Submit your problem and receive
              quick and confidential support. We value your privacy and are
              committed to providing you with the highest level of care. Let us
              help you overcome your challenges today.
            </p>
            <div>
              <Link to="/add" className="btn btn-dark me-2">Ask question</Link>
              <Link className="btn btn-outline-dark">Contact</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-4 col-12">
          <div className="image">
            <img
              src="assests/bg_1.png"
              className="pic img-fluid"
              alt="pic"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="3000"
              data-aos-easing="linear"
            />
          </div>
        </div>
      </div>
      <Silder />
      <Blog />
      <Faqs />
      <Contact />
      <FooterCop />
    </div>
  );
}

export default HomePage;
