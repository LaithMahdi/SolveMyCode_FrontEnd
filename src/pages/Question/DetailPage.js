import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, getTimeAgo } from "../../config/utils";
import axios from "axios";

export default function Detail() {
  // get id from url
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [languages, setLanguages] = useState([]);
  // fecthing data
  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    axios.get(`${API_URL}/${id}/languages`).then((response) => {
      setLanguages(response.data);
    });
  }, [id]);
  // if no data found spinner willl still visible
  if (!data) {
    return (
      <div class="text-center my-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // format date
  const date = new Date(data.dateOfCreation);
  const timeAgo = getTimeAgo(date);

  return (
    <div className="container mt-3 container_shape">
      <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/question">Question</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Detail
          </li>
        </ol>
      </nav>

      <div className="row mt-5 shape">
        <div className="col">
          <div className="box">
            <h4 className="fw-bold">{data.title}</h4>
            <p className="fw-normal text-muted">
             {timeAgo}
            </p>
           
          
            <hr></hr>
            <div className="d-flex my-3">
              
              {languages.map((language) => (
                   <div className="badge rounded-pill bg-dark me-2 p-2">
                      {language.content}
                    </div>
                  ))}
              </div>
            <div className="">
              <p>{data.content}</p>
          
            
            </div>
            <hr className="my-2"/>
            <div className="float-start">
              <p>
                <strong>Answers :</strong> user1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}