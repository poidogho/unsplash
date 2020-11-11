import React, { Component } from "react";

// });
class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    //console.log(this.state.photos);
    const { searchTerm } = this.state;
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Amazing HD images.."
          name="searchTerm"
          value={searchTerm}
          onChange={this.handleChange}
        />
        <button
          className="button button-search"
          onClick={() => this.props.filterPhotos(searchTerm)}
        >
          {" "}
          Search Now
        </button>
      </div>
    );
  }
}

export default Search;
