import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../config/utils";

const UpdatingQuestion = () => {
const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchQuestionDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    fetchQuestionDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError(true);
      return;
    }

    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        title: title,
        content: content,
        dateOfUpdate: now,
      });
      console.log(response.data);

      if (response.status === 200) {
        setDone(true);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setDone(false);
    }
  };

  return (
    <div className="container mt-5">
        <div className="row">
        <form
      onSubmit={handleSubmit}
      className="container mt-5 d-flex justify-content-center"
    >
      <div className="col-6">
        {done && (
          <div className="alert alert-success fw-bold" role="alert">
            Question updated successfully!
          </div>
        )}
        {error && (
          <div className="alert alert-danger fw-bold" role="alert">
            An error occurred while updating the question.
          </div>
        )}

        <div>
          <label className="my-2">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div>
          <label className="my-2">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            rows={10}
            cols={15}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary my-3 fw-normal">
            Update
          </button>
        </div>
      </div>
    </form>
        </div>
    </div>
  );
};

export default UpdatingQuestion;
