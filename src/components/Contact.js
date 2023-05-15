import React, { useEffect, useState } from "react";
import "../style/style.css";
import AOS from "aos";
import axios from "axios";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your logic for submitting the form goes here
    try {
      // Assuming you're using axios to make the POST request
      await axios.post("https://127.0.0.1:8000/api/contacts", {
        name: name,
        mail: email,
        content: message,
      });
      // If the request is successful, clear the form and display a success message
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      setError(false);
    } catch (err) {
      // If there's an error, display an error message
      console.error(err);
      setSuccess(false);
      setError(true);
    }
  };
  return (
    <div className="my-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="pt-5">
              <h6>Contact Us</h6>
              <h3 className="fw-bolder text-uppercase">Get in touch with us</h3>
            </div>
            <div>
              {success && (
                <div className="alert alert-success" role="alert">
                  Your message has been sent!
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  There was an error sending your message. Please try again
                  later.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="mt-2">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="mt-2">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="mt-2">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}
