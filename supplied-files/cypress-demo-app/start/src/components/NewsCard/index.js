import React from "react";
import "./index.css";

function NewsCard(props) {
  const {title, description} = props.headline;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
