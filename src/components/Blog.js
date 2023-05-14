import React, { useEffect } from "react";
import "../style/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
export default function Blog() {
    useEffect(() => {
        AOS.init();
      }, []);
    
      useEffect(() => {
        AOS.refresh();
      });
  const data = [
    {
      title:
        "Node.js 20 Released, Features Experimental",
      content:
        "The Node.js team recently released Node v20 (Current release). Node v20 will be ready for full production deployments after entering the long-term support (LTS) stage in October.",
      picture:
        "https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png",
        duration:"2000",
    },
    {
      title: "Remult, a Crud Framework for Fullstack Typescript",
      content:
        "Remult is a full-stack CRUD library that simplifies development by leveraging TypeScript models, providing a type-safe API client and query builder.In software development.",
      picture:
        "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/92e2a46773fa22389faaa464af8bf6ea",
    duration:"2500",
    },
    {
      title: "AWS Lambda Introduces Response Payload Streaming",
      content:
        "Amazon recently announced that AWS Lambda functions can progressively stream response payloads back to the client. The new feature improves performance for web and mobile.",
      picture:
        "https://res.infoq.com/news/2022/02/TypeScript-beta-release/en/headerimage/TypeScript-46-beta-improves-type-inference-and-error-checking-header-1645020026805.jpg",
        duration:"3000",
    },
  ];
  return (
    <div className="" id="header">
      <div className="box">
        <div className="p-5 text-center">
          <h5 className="fw-light text-muted">Recent Blog Posts</h5>
          <h2 className="fw-bolder text-uppercase">What's happening</h2>
        </div>
        <div className="container d-flex">
          {data.map((item) => (
            <div className="col-md-4 col-6 mx-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration={item.duration}>
              <div className="card" >
                <img src={item.picture} className="card-img-top" alt="..."  style={{height:"30vh"}}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p
                    className="card-text mt-3"
                    style={{ textAlign: "justify" }}
                  >
                    {item.content}
                  </p>
                  <Link href="#" className="btn btn-outline-dark float-end">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
