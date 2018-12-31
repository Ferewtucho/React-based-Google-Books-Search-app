import React from "react";
import "./BookCard.css";

function BookCard(props) {
  return (
    <div className="card-container">
      <a href={props.link} target="_blank">
        <img src={props.img} alt="" />
      </a>
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>Author : {props.author}</h3>
        <p>
          Publish Date :{" "}
          {props.publisheddate === "0000"
            ? "Not available"
            : props.publisheddate.substring(0, 4)}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
