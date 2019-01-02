import React from "react";
// import "./BookCard.css";

function BookCard(props) {
  return (
    <div className="col-md-3 col-md-offset-2">
      <a href={props.link} rel="noopener noreferrer" target="_blank">
        <img src={props.img} alt="" />
      </a>
      <div className="desc">
        <br />
        <h4>{props.title}</h4>
        <h5>Author : {props.author}</h5>
        <p>
          Publish Date :{" "}
          {props.publisheddate === "0000"
            ? "Not available"
            : props.publisheddate.substring(0, 4)}
        </p>
        {/* <p>Description: {props.description}</p> */}
      </div>
      <hr />
      <br />
    </div>
  );
}

export default BookCard;
