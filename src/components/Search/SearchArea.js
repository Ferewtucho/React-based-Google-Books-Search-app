import React from "react";
import "./SearchArea.css";

function SearchArea(props) {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="" className="form-inline">
        <div className="form-group mb-2">
          <input
            onChange={props.handleSearch}
            type="text"
            className="form-control"
          />
        </div>
        |
        <button type="submit" className="btn btn-primary mb-2 btn-dark">
          Search
        </button>
        <div className="form-group mx-sm-3 mb-2">
          <select
            defaultValue="Sort"
            onChange={props.handleSort}
            className="btn btn-outline-secondary"
          >
            <option disabled value="Sort">
              Sort
            </option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchArea;
