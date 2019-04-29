import React from "react";
import Search from "../components/search";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="page-container">
          <div className="header">Search For Food</div>

          <div className="container">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
