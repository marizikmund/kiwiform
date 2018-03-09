import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";

const Flight = ({ node }) => {
  return (
    <div className="flight">
      <div className="flight-date">
        {moment(node.departure.localTime).format("L")} <br />
        <b>
          {node.price.amount} {node.price.currency}
        </b>
      </div>
      <div className="flight-details">
        <table className="flight-details-table">
          <tbody>
            <tr>
              <td>Departure</td>
              <td>
                <b>
                  {moment(node.departure.localTime).format("MM-DD-YYYY h:mm")}
                </b>
              </td>
              <td>{node.departure.airport.name}</td>
            </tr>
            <tr>
              <td>Arrival</td>
              <td>
                <b>
                  {moment(node.arrival.localTime).format("MM-DD-YYYY h:mm")}
                </b>
              </td>
              <td>{node.arrival.airport.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flight-price-logo">
        {node.airlines.map(airline => (
          <img
            key={airline.name}
            src={airline.logoUrl}
            title={airline.name}
            className="flight-price-logo-logo"
          />
        ))}
      </div>
      <div className="clearfix" />
    </div>
  );
};

Flight.propTypes = {
  node: PropTypes.object.isRequired
};

export default Flight;
