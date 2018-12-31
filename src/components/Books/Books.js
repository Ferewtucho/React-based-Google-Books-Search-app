import React, { Component } from "react";
import SearchArea from "../Search/SearchArea";
import BookList from "../BookList/BookList";

class Books extends Component {
  state = {
    books: [],
    searchField: "",
    sort: ""
  };

  searchBook = e => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const cleanData = this.cleanData(json);
        this.setState({
          books: cleanData
        });
      });
  };

  handleSearch = e => {
    // console.log(e.target.value);

    this.setState({
      searchField: e.target.value
    });
  };

  handleSort = e => {
    console.log(e.target.value);
    this.setState({
      sort: e.target.value
    });
  };

  cleanData = json => {
    const cleanData = json.items.map(book => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://vignette.wikia.nocookie.net/theflophouse/images/0/0a/No-image-available.png/revision/latest?cb=20140219035154"
        };
      }

      return book;
    });
    return cleanData;
  };

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === "Newest") {
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (this.state.sort === "Oldest") {
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        );
      }
      return sortedBooks;
    });
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}

export default Books;
