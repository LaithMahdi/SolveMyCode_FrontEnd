import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL_USER } from '../config/utils';

export default function Signup() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();  // Access the history object

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL_USER, {
        email: username,
        roles: ["ROLE_USER"],
        password: password
      });

    console.log("data added"+response.data);
      // Reset the form
      setUserName("");
      setPassword("");
      setAlert("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      setAlert("Error creating account. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="col-6">
            <div className="card p-5">
              <h3>Create an account</h3>
              {alert && <div className="alert alert-danger">{alert}</div>} {/* Render the alert message */}

              <form onSubmit={handleSubmit}>
                <div>
                  <label className="my-2">Username :</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control"
                    required={true}
                  />
                </div>

                <div>
                  <label className="my-2">Password :</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required={true}
                  />
                </div>
                <div className='text-center'>
                  <input type="submit" className="btn btn-dark my-3" />
                  <br />
                  <p className="text-center">You already have an account ? <Link to="/">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
