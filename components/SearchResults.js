import React, { Component } from "react";
import Router from "next/router";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import DestinationPicker from "./DestinationPicker";
import FlightsList from "./FlightsList";

const NUM_LOAD_ITEMS = 5;

class SearchResults extends Component {
  constructor() {
    super();
    this.fetchMoreFlights = this.fetchMoreFlights.bind(this);
  }

  fetchMoreFlights() {
    this.props.fetchMoreFlights();
  }

  render() {
    return (
      <div className="search-results">
        <FlightsList allFlights={this.props.allFlights} />
        {this.props.loading && (
          <img src="/static/spinner.svg" className="loading" />
        )}
        {!this.props.loading &&
          this.props.allFlights &&
          this.props.allFlights.edges &&
          this.props.allFlights.edges.length > 0 && (
            <button
              onClick={this.fetchMoreFlights}
              className="yellow-button load-more-button"
            >
              Load more flights
            </button>
          )}
      </div>
    );
  }
}

const allFlightsQuery = gql`
  query allFlights(
    $from: String
    $to: String
    $date: Date
    $NUM_LOAD_ITEMS: Int
  ) {
    allFlights(
      search: {
        from: { location: $from }
        to: { location: $to }
        date: { exact: $date }
        passengers: { adults: 2 }
      }
      options: { currency: EUR, locale: en_US }
      first: $NUM_LOAD_ITEMS
    ) {
      edges {
        node {
          id
          airlines {
            name
            logoUrl
          }
          departure {
            airport {
              name
            }
            localTime
          }
          arrival {
            airport {
              name
            }
            localTime
          }
          price {
            amount
            currency
          }
        }
      }
    }
  }
`;

export default graphql(allFlightsQuery, {
  options: ({ query: { departureDate, destination, origin } }) => {
    return {
      variables: {
        from: origin,
        to: destination,
        date: departureDate,
        NUM_LOAD_ITEMS: NUM_LOAD_ITEMS
      },
      notifyOnNetworkStatusChange: true
    };
  },
  props: ({ data: { allFlights, loading, fetchMore } }) => {
    return {
      allFlights,
      loading,
      fetchMoreFlights() {
        return fetchMore({
          variables: {
            NUM_LOAD_ITEMS: allFlights.edges.length + NUM_LOAD_ITEMS
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return {
              ...previousResult,
              allFlights: {
                ...previousResult.allFlights,
                ...fetchMoreResult.allFlights
              }
            };
          }
        });
      }
    };
  }
})(SearchResults);
