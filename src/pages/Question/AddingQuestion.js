import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/utils";

const AddingQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError(true);
      return;
    }

    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.post(API_URL, {
        title: title,
        content: content,
        dateOfCreation: now,
      });
      console.log(response.data);

      if (response.status === 201) {
        const id = response.data.id;
        console.log("id is : ",id);
        setDone(true);
        setError(false);
        setTitle("");
        setContent("");
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
