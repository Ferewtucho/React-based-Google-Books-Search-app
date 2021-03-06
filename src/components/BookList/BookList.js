import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookList.css";

function BookList(props) {
  return (
    <div>
      <div className="row">
        {props.books.map((book, i) => {
          return (
            <BookCard
              key={i}
              img={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              publisheddate={book.volumeInfo.publishedDate}
              description={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
