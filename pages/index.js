import React, { Component } from "react";
import Router from "next/router";

import HeaderSearch from "../components/HeaderSearch";

class Home extends Component {
  componentDidMount() {
    Router.prefetch("/results")
  }
  
  render() {
    return (
      <div>
        <HeaderSearch query={this.props.url.query} />
        <h1 className="h1">Welcome. Look for the flights you wish</h1>
        <h3 className="h3">Features</h3>
        <ul className="main-ul">
          <li>Used both REST and GraphQL API</li>
          <li>
            Several libraries used for various purposes (nextjs, axios, apollo, moment,
            react-select...)
          </li>
          <li>Destinations auto-suggest</li>
          <li>Pagination</li>
          <li>Persistent URLs - address with search results can be refreshed</li>
          <li>Simple responsivity</li>
        </ul>
      </div>
    );
  }
}
export default Home;
