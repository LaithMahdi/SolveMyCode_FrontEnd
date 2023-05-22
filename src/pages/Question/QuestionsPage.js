import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, API_URL_ANSWSER } from "../../config/utils";
import "../../style/style.css";
import AddQuestion from "../../components/AddQuestion";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // New addition
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get(API_URL_ANSWSER);
        setAnswers(response.data["hydra:member"]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnswers();
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (questionId) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await axios.delete(`${API_URL}/${questionId}`);
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== questionId)
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${API_URL}/?page=${page}`);
      setQuestions(response.data["hydra:member"]);
      setTotalPages(response.data["hydra:view"]["hydra:last"].split("=")[1]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container mt-5">
        {loading ? (
          <div className="d-flex justify-content-center" style={{marginTop:"50vh"}}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row d-flex justify-content-start">
            <h1 className="mt-5 fw-bold">List of questions</h1>
            <div className="col-md-8 col-lg-8 col-sm-12 col-12">

              {questions.map((question) => (
                <div className="" key={question.id}>
                  <div className="px-3 py-2 mb-3 border border-1 rounded-3 bg-white">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5
                          className="fw-bold mt-2 d-flex justify-content-center align-items-center"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                          }}
                        >
                          {question.title}{" "}
                          <div className="ms-2">
                            {question.answers.length > 0 ? (
                              <i
                                className="fa-solid fa-circle-check text-success"
                                style={{ fontSize: "17px" }}
                              ></i>
                            ) : (
                              <i
                                className="fa-regular fa-circle-check text-danger"
                                style={{ fontSize: "17px" }}
                              ></i>
                            )}
                          </div>
                        </h5>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-ellipsis"></i>
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <button className="dropdown-item">
                                <Link
                                  Link
                                  to={"/edit/" + question.id}
                                  className="text-dark text-decoration-none"
                                >
                                  edit
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item">
                                <Link
                                  className="text-dark text-decoration-none"
                                  onClick={() => handleDelete(question.id)}
                                >
                                  delete
                                </Link>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p
                        className=""
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {question.content}
                      </p>

                      <div className="d-flex justify-content-end pb-2">
                        <Link
                          to={`/detail/${question.id}`}
                          className="text-decoration-none text-dark d-flex align-items-center fw-bold"
                        >
                          Read more
                          <i className="fa-solid fa-arrow-right-long ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

                {/* Render the pagination */}
        <div className="my-2 d-flex justify-content-center" id="pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>

              {/* Render page numbers */}
              {/* You can replace totalPages with the actual total number of pages */}
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""
                    }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${currentPage - 1 === totalPages - 1 ? "disabled" : ""
                  }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-12 col-12 bg-white p-3 rounded rounded-2 border border-1 mb-5">
            <h4 className="mt-2">Number of questions & answers</h4>
              <div className="d-flex justify-content-around my-3">
                <div className="border border-2 rounded-3 me-2">
                  <div className="box text-center p-3">
                    <h5 className="text-primary">Question</h5>
                    <h2 className="fw-bold">{questions.length}+</h2>
                  </div>
                </div>

                <div className="border border-2 rounded-3">
                  <div className="box text-center p-3">
                    <h5 className="text-danger">Answers</h5>
                    <h2 className="fw-bold">{answers.length}+</h2>
                  </div>
                </div>
              </div>
              <AddQuestion />
            </div>
          </div>
        )}

      
      </div>
    </div>
  );
};
export default QuestionsPage;
