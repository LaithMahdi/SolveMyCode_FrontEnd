import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL_USER } from "../config/utils";
import axios from "axios";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL_USER}`);
      setUsers(response.data["hydra:member"]);
    } catch (error) {
      console.error(error);
    }
  };

  const checkCredentials = (email, password) => {
    if (!users) return false;

    const matchingUser = users.find(
      (user) => user.email === email && user.password === password
    );

    return matchingUser ? matchingUser.id : null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = username;
    const enteredPassword = password;

    const matchingUserId = checkCredentials(enteredEmail, enteredPassword);

    if (matchingUserId) {
      // Credentials are valid, do something with the user ID
      console.log("Login successful. User ID:", matchingUserId);
      setLoginError(false);
      localStorage.setItem("authToken", true);
      navigate('/');
      window.location.reload();
    } else {
      // Credentials are invalid, show an error message
      console.log("Login failed");
      setLoginError(true);
    }
  };

  return (
    <div className="">
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-6">
            <div className="card p-5 shadow-sm">
              <h3>Welcome user</h3>
              {loginError && (
                  <p className="alert alert-danger">Invalid email or password</p>
                )}
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
                <div>
                  <div className="text-center"><input type="submit" className="btn btn-dark my-3" /></div>

                  <br />
                  <p className="text-center">
                    You don't have an account ? <Link to="/sign">Sign up</Link>
                  </p>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
