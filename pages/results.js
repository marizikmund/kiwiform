import React, { Component } from "react";
import gql from "graphql-tag";

import withData from "../lib/withData";

import HeaderSearch from "../components/HeaderSearch";
import SearchResults from "../components/SearchResults";

class Results extends Component {
  render() {
    return (
      <div>
        <HeaderSearch query={this.props.url.query} />
        <SearchResults query={this.props.url.query} />
      </div>
    );
  }
}

export default withData(Results);
