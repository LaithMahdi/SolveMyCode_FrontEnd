import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React, { Component } from "react";
import QuestionsPage from "./pages/Question/QuestionsPage";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Question/DetailPage";
import AddingQuestion from "./pages/Question/AddingQuestion";

const AboutPage = () => <div>About</div>;
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark">
            <div className="container">
              <Link className="navbar-brand"  to='/'>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
              <li className='nav-item'> <Link to='/question' className='nav-link'>Questions </Link> </li>
              <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search 
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/question" element={<QuestionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/add" element={<AddingQuestion/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
