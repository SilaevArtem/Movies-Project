import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
        this.props.searchMovie(this.state.search, this.state.type)
    })
  };

  render() {
    return (
      <div className="input-field col s6">
        <input
          type="search"
          placeholder="Search"
          className="validate"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <button
          className="btn"
          onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              className="with-gap"
              name="radio"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="radio"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="radio"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
