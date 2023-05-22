import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center"  style={{height:"100vh"}}>
          <div className="col-6">
            <div className="card p-5">
              <h3>Welcome user</h3>
              <form>
              <div>
                <label className="my-2">username :</label>
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
                <input type="submit" className="btn btn-dark my-3" /> 
                
                <br />
                <p className="text-center">You don't have an account ? <Link to="/sign">Sign up</Link></p>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
