import React, { useState, useEffect } from "react";
import { getAllQuestions } from "../../Api/Question";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, dateFormatMonth } from "../../config/utils";
import "../../style/style.css";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const handleDelete = async (questionId) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      try {
        await axios.delete(`${API_URL}/${questionId}`);
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== questionId)
        );
      } catch (error) {
        console.error(error);
        // Handle any errors that occur during the deletion
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.post(API_URL, {
        title: title,
        content: content,
        dateOfCreation: now,
      });

      if (response.status === 201) {
        setDone(true);
        setError(false);
        setTitle("");
        setContent("");
        getAllQuestions().then((response) => {
          setQuestions(response.data["hydra:member"]);
          setLoading(false);
          setDone(false);
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setDone(false);
    }
  };

  useEffect(() => {
    getAllQuestions().then((response) => {
      setQuestions(response.data["hydra:member"]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="mt-5">List of questions</h1>
        <div>
          <Link
            to=""
            className="btn btn-outline-primary mb-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Adding question
          </Link>
        </div>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {questions.map((question) => (
              <div className="col-md-6 col-sm-6 col-12" key={question.id}>
                <div className="p-3 m-2 border border-2 rounded-3 shadow-sm">
                  <Link
                    to={`/detail/${question.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h5
                        className="fw-bold mt-2"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {question.title}
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
                            <span className="dropdown-item">
                              
                              <Link
                              Link to={"/edit/" + question.id}
                                className="text-dark text-decoration-none"
                              >
                                edit
                              </Link>
                            </span>
                          </li>
                          <li>
                            <span className="dropdown-item">
                              {" "}
                              <span
                                className=""
                                onClick={() => handleDelete(question.id)}
                              >
                                delete
                              </span>
                            </span>
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
                    <div className="d-flex justify-content-between">
                      {question.answers.length > 0 ? (
                        <div className="text-success">
                          <i className="fa-solid fa-circle-check pe-2"></i>
                          <span className="fw-bold">Answered</span>
                        </div>
                      ) : (
                        <div className="text-danger">
                          <i className="fa-regular fa-circle-check pe-2"></i>
                          <span className="fw-bold">No answer</span>
                        </div>
                      )}
                      <span className="me-2"></span>
                      <p className="text-muted">
                        {dateFormatMonth(question.dateOfCreation)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <section>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add question
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit} className="">
                <div className="modal-body">
                  <div className="">
                    {done && (
                      <div className="alert alert-success" role="alert">
                        Question created successfully!
                      </div>
                    )}
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        An error occurred while creating the question.
                      </div>
                    )}
                    <div>
                      <label className="">Title:</label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        required={true}
                      />
                    </div>

                    <div>
                      <label className="mt-2">Content:</label>
                      <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                        required={true}
                        rows={10}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default QuestionsPage;
