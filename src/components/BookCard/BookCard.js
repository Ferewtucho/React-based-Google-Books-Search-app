import React from "react";
import "./BookCard.css";

function BookCard(props) {
  return (
    <div className="card-container">
      <img src={props.img} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.publisheddate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
