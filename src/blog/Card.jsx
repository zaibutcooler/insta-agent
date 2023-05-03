import React from "react";

const Card = ({ title, body }) => {
  const cardStyle = {
    backgroundColor:
      "#f5f5f5" /* Change this to the background color of your choice */,
    borderColor: "#252a34" /* Change this to the color of your navbar */,
    color:
      "#252a34" /* Change this to a contrasting color that matches your background */,
  };
  return (
    <div className="card" id="card" style={cardStyle}>
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
