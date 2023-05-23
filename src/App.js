import { BrowserRouter,Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import QuestionsPage from "./pages/Question/QuestionsPage";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Question/DetailPage";
import "./App.css";
import UpdatingQuestion from "./pages/Question/UpdatingQuestion";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const authToken = localStorage.getItem('authToken');
  const isLoggedIn = !!authToken;
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        {isLoggedIn ? 
          <Route path="/" element={<HomePage />} />:   <Route path="/"  element={<Login />} />
        }
          <Route path="/question" element={<QuestionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<UpdatingQuestion />} />
       
          <Route path="/sign" element={<Signup />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;