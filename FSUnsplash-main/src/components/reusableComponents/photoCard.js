import React from "react";
import { Link } from "react-router-dom";

function photoCard({ img, download, likes, updateLikes, down, id }) {
  return (
    <div className="child">
      <div className="card">
        <Link to={`photos/${id}`}>
          <img
            src={img}
            alt="Avatar"
            style={{ width: "100%", maxHeight: "300px" }}
          />
        </Link>
        <a
          href={download}
          target="_blank"
          download
          rel="noreferrer"
          style={{ display: "inline-block", float: "right" }}
        >
          <i className="fas fa-cloud-download-alt fa-2x"></i>
        </a>

        <i
          className="fas fa-thumbs-up fa-2x"
          style={{ display: "inline-block" }}
          //  onClick={updateLikes}
        >
          <small> {likes}</small>
        </i>
      </div>
    </div>
  );
}
export default photoCard;
