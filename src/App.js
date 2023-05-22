import { BrowserRouter,Route, Routes } from "react-router-dom";
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
import Singup from "./pages/Singup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/question" element={<QuestionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<UpdatingQuestion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Singup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;