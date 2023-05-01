import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="title is-4">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
