import React, { useState, useEffect } from "react";
import { getAllQuestions } from "../../Api/Question";
import { Link } from "react-router-dom";
import { dateFormatMonth } from "../../config/utils";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllQuestions().then((response) => {
      setQuestions(response.data["hydra:member"]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">List of questions</h1>
      <Link to="/add" className="btn btn-primary">
        Add{" "}
      </Link>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row mt-4">
          <div className="col-10">
            {questions.map((e) => (
              <Link
                className="card mt-3 text-decoration-none text-dark"
                to={"/detail/" + e.id}
                key={e.id}
              >
                <div className="card-body">
                  <h5 className="fw-bold mt-2">{e.title}</h5>
                  <div className="d-flex">
                  {e.answers.length > 0 ? (
                    <div className="text-success">
                      <i className="fa-solid fa-circle-check pe-2"></i>
                      <span className="fw-bold">Answered</span>
                    </div>
                  ) : (
                    <div className="text-danger">
                      <i className="fa-regular fa-circle-check pe-2"></i>
                      <span className="fw-bold">No anwser</span>
                    </div>
                  )}
                  <span className="me-2"></span>
                  <p className="text-muted">
                    {dateFormatMonth(e.dateOfCreation)}
                  </p>
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
                      {e.content}
                    </p>
                  
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsPage;
