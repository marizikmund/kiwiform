import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import PropTypes from "prop-types";

class DestinationPicker extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // preferably solvable by redux or graphql, but easy and quick enough for now
    if (this.props.value && this.state.locations.length === 0) {
      this.fetchLocations(this.props.value, true);
    }
  }

  onInputChange(value) {
    const { typeDestination, onSelectDestination } = this.props;
    if (value.length > 2) {
      this.fetchLocations(value);
    }
  }

  onChange(value) {
    const { typeDestination, onSelectDestination } = this.props;
    onSelectDestination(typeDestination, value.value);
  }

  async fetchLocations(value, searchById = false) {
    const locationsFromAPI = await axios.get(
      "https://api.skypicker.com/locations/" +
        (!searchById ? "?term=" + value + "&v=2" : "?type=id&id=" + value) +
        "&locale=en-US"
    );

    this.setState({
      locations: locationsFromAPI.data.locations.map(location => ({
        value: location.id,
        label: location.name
      }))
    });
  }

  render() {
    const { value, title } = this.props;
    return (
      <div className="header-search-input-wrapper">
        <span className="header-search-input-title">{title}</span>
        <Select
          onInputChange={this.onInputChange}
          value={value}
          clearable={false}
          arrowRenderer={null}
          onSelectResetsInput={false}
          options={this.state.locations}
          searchPromptText=""
          placeholder="Type in airport/place"
          noResultsText={false}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

DestinationPicker.propTypes = {
  typeDestination: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  onSelectDestination: PropTypes.func
};

export default DestinationPicker;
