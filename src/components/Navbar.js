import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
 
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken'); // Get the authToken from localStorage

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the authToken from localStorage
    navigate('/'); // Navigate to the login page
    window.location.reload();

  }; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <strong>SolveMyCode</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/question" className="nav-link">
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
          
                {authToken ? (
                
                    <button className="btn btn-outline-light" onClick={handleLogout}>
                      Logout
                    </button>
                
                ) : (
                  
                   
                      <Link className="btn btn-outline-light" to="/login">
                        Login
                      </Link>
                   
                
                )}
            
          
          </form>
        </div>
      </div>
    </nav>
  );
}
