import React, { useEffect } from "react";
import "../style/style.css";
import AOS from "aos";
export default function Faqs() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  const data = [
    {
      title: "What is Responsive Web Design (RWD) in HTML and CSS?",
      content:
        "Responsive design refers to a site or application design that responds to the environment in which it is viewed. It encompasses a number of CSS and HTML features and techniques and is now essentially just how we build websites by default.",
      aria: "headingOne",
      show: "show",
    },
    {
      title: "What is pagination? How can pagination be implemented?",
      content:
        "Pagination is a technique used to divide large amounts of data into smaller, more manageable parts or pages. It allows users to view a specific subset of data at a time, reducing the amount of data the user needs to load and increasing the speed and efficiency of the application.",
      aria: "headingTwo",
      show: "",
    },
    {
      title: "What is the result if a jQuery Event Handler returns false?",
      content:
        "If a jQuery event handler returns false, it will prevent the default behavior of the event and stop the event from propagating to other elements in the DOM. In other words, it will stop the event from performing its default action, such as following a link or submitting a form, and it will prevent the event from triggering any other event handlers that might be bound to parent or ancestor elements.",
      aria: "headingThree",
      show: "",
    },
  ];
  return (
    <div className="mt-5 faqs">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center">
            <img
              src="assests/bg_3.png"
              className="img-fluid"
              alt="pic"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="3000"
              data-aos-easing="linear"
            />
          </div>

          <div className="col-md-8 col-12">
            {data.map((item) => (
              <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item ">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <p className="fw-bold"> {item.title}</p>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${item.show}`}
                    aria-labelledby={item.aria}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
