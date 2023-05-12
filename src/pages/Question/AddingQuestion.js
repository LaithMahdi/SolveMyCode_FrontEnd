import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/utils";
const AddingQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // i create this object because hour -1
    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.post(API_URL, {
        title: title,
        content: content,
        picture: picture,
        dateOfCreation: now,
      });
      console.log(response.data);

      if (response.status === 201) {
        setDone(true);
        setError(false);
        setTitle("");
        setContent("");
        setPicture("");
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
    <form
      onSubmit={handleSubmit}
      className="container mt-4 d-flex justify-content-center"
    >
      <div className="col-6">
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
          <label>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div>
          <label>Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>

        <div>
          <label>Picture:</label>
          <input
            type="file"
            id="picture"
            onChange={(e) => setPicture(e.target.files[0])}
            className="form-control"
            accept=".jpg, .jpeg, .png"
            size="2097152"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddingQuestion;
