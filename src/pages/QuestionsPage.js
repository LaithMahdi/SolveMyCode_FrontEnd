import React, { useState, useEffect } from "react";
import { getAllQuestions } from "../Api/Question";
import { Link } from "react-router-dom";
import { dateFormatMonth } from "../config/utils";

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
      <Link to="/AddQuestion" className="btn btn-primary">Add </Link>
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
                  <h5 className="card-title">{e.title}</h5>
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {e.content}
                  </p>
                  <p className="text-muted">
                    <strong>Date of creation : </strong>
                    {dateFormatMonth(e.createdAt)}
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
