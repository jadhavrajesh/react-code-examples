import React from "react";

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      fruits: ["apple", "banana", "mango"],
      isHidden: true,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const searchText = e.target.value;
    this.setState({ value: searchText, isHidden: false });
  }

  getSearchResults() {
    const regex = new RegExp(`^${this.state.value}`, "i");
    const result = this.state.fruits.filter((fruit) => {
      return fruit.match(regex);
    });
    return result;
  }
  render() {
    const searchResult = this.getSearchResults();

    return (
      <>
        <div className="search-module-wrapper">
          <div className="search-module-container">
            <label>Search Fruits</label>
            <input
              type="text"
              value={this.state.value}
              placeholder="Search..."
              onChange={this.onChangeHandler}
              className="input-search"
            ></input>
            {!this.state.isHidden && (
              <ul>
                {searchResult.map((fruit, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() =>
                        this.setState({ value: fruit, isHidden: true })
                      }
                    >
                      {fruit}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default SearchDropdown;
