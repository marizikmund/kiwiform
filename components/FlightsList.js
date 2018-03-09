import React, { Component } from "react";
import PropTypes from "prop-types";

import Flight from "./Flight";

const FlightsList = ({ allFlights }) => {
  if (!allFlights) return null;
  
  if (allFlights.edges !== undefined && allFlights.edges.length === 0)
    return <div>No flights found.</div>;

  return (
    <div>
      {allFlights.edges.map(edge => (
        <Flight node={edge.node} key={edge.node.id} />
      ))}
    </div>
  );
};

Flight.propTypes = {
  allFlights: PropTypes.array
};

export default FlightsList;
