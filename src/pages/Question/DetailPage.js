import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, getTimeAgo } from "../../config/utils";

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
            <h4>{data.title}</h4>
            <div className="d-flex justify-content-between">
              <p>
                <strong>Add it by :</strong>
                {/* {data.user.username} user */}
              </p>
              <p className="">
                <strong>Date of creation :</strong> {timeAgo}
              </p>
            </div>
            <hr></hr>
            <div className="">
              <p>{data.content}</p>
            </div>
            <div className="float-start mt-5">
              <p>
                <strong>Comment as :</strong> user1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
