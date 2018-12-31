import React, { Component } from "react";
import SearchArea from "../Search/SearchArea";
import BookList from "../BookList/BookList";

class Books extends Component {
  state = {
    books: [],
    searchField: ""
  };

  searchBook = e => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          books: [...json.items]
        });
      });
  };
  handleSearch = e => {
    // console.log(e.target.value);

    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
