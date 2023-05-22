import React from "react";
import FooterCop from "../components/FooterCop";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <Navbar />
    <div className="container py-5 d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
          <h2 className="mb-4">About Our Website</h2>
          <p>
            Welcome to our website! We are dedicated to providing developers
            with the resources and tools they need to solve their coding
            challenges effectively. Our mission is to empower developers and
            foster a supportive community for learning and growth.
          </p>
          <p>
            Whether you're a beginner or an experienced programmer, our platform
            offers a wide range of tutorials, articles, and code snippets to
            help you tackle complex problems. We believe that sharing knowledge
            and collaborating with fellow developers is key to success in the
            ever-evolving world of technology.
          </p>
          <p>
            Join our community today and take advantage of our vast collection
            of resources. We encourage you to participate in discussions, ask
            questions, and share your own solutions with the community.
            Together, we can overcome any coding obstacle!
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center position-relative">
          <div className="image-overlay">
            <h1 className="text-uppercase text-light">SolveMyCode</h1>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="About"
            className="img-fluid  shadow-lg w-100"
          />
        </div>
      </div>
      
    </div>
<FooterCop />
    </div>
  );
}
