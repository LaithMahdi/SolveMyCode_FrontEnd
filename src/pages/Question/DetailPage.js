import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, getTimeAgo } from "../../config/utils";
// import axios from "axios";

export default function Detail() {
  // get id from url
  const { id } = useParams();
  const [data, setData] = useState(null);
  // fecthing data
  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [id]);

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
    <div className="container mt-5">
      <div className="row">
      <div className="col mt-5"><nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/question">Question</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Detail
          </li>
        </ol>
      </nav></div>


      <div className="row">
      <div className="col">
          <div className="box">
            <h4 className="fw-bold">{data.title}</h4>
            <div className="d-flex justify-content-between align-items-center">

            <p className="fw-normal text-muted">
             {timeAgo}
            </p>

            <Link to={"/edit/"+id} className="btn btn-dark">
            <i className="fa-solid fa-pen"></i>
            </Link>
            </div>
           
          
            <hr></hr>
            <div className="">
              <p>{data.content}</p>
              <h1>{data.answers.content}</h1>
            
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
    </div>
  );
}
