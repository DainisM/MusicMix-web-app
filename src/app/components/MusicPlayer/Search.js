import React from "react";
import MusicPlayerLayout from "../../pages/Layouts/MusicPlayerLayout";

class Search extends React.Component {
  state = {};

  render() {
    return (
      <MusicPlayerLayout>
        <div className="Search">
          <h1>Search</h1>
          <input className="SearchInput" type="text" />
        </div>
      </MusicPlayerLayout>
    );
  }
}

export default Search;
