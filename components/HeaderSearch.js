import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";
import DatePicker from "react-datepicker";
import moment from "moment";
import PropTypes from "prop-types";

import DestinationPicker from "./DestinationPicker";

class HeaderSearch extends Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      destination: "",
      departureDate: ""
    };
    this.onSelectDestination = this.onSelectDestination.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    if (this.props.query && this.props.query.departureDate) {
      this.setState({
        departureDate: moment(this.props.query.departureDate),
        origin: this.props.query.origin,
        destination: this.props.query.destination
      });
    } else {
      this.setState({ departureDate: moment().add("2", "days") });
    }
  }

  onSelectDestination(typeDestination, destinationCode) {
    if (!destinationCode) return;
    this.setState({
      [typeDestination]: destinationCode
    });
  }

  onChangeDate(departureDate) {
    this.setState({ departureDate });
  }

  search() {
    const searchQuery = {
      ...this.state,
      departureDate: moment(this.state.departureDate).format("YYYY-MM-DD")
    };

    if (!searchQuery.origin) return alert("Please fill in where to fly from.");
    if (!searchQuery.destination)
      return alert("Please fill in where you want to fly.");
    if (!searchQuery.departureDate)
      return alert("Please fill in the desired date of the flight.");

    Router.push({
      pathname: "/results",
      query: searchQuery
    });
  }

  render() {
    const { query } = this.props;

    return (
      <div className="header">
        <Link href="/">
          <a>
            <img src="/static/logo.jpg" alt="Kiwi.com" className="logo" />
          </a>
        </Link>
        <div className="header-search">
          <div className="tablet-third">
            <DestinationPicker
              title="From"
              value={this.state.origin || query.origin}
              onSelectDestination={this.onSelectDestination}
              typeDestination="origin"
            />
          </div>
          <div className="tablet-third">
            <DestinationPicker
              title="To"
              value={this.state.destination || query.destination}
              onSelectDestination={this.onSelectDestination}
              typeDestination="destination"
            />
          </div>
          <div className="tablet-third">
            <span className="header-search-datepicker-title">When</span>
            <DatePicker
              selected={moment(this.state.departureDate)}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="clearfix" />
          <button className="yellow-button" onClick={this.search}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

HeaderSearch.propTypes = {
  query: PropTypes.object.isRequired
};

export default HeaderSearch;
