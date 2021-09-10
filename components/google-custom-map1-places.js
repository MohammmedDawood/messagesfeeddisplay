import React, { Component } from "react";
import { GoogleCustomMapPlaceStyle } from "./google-custom-map1-places-style";

class GoogleCustomMapPlace extends Component {
  static defaultProps = {};

  render() {
    return <div style={GoogleCustomMapPlaceStyle}>{this.props.text}</div>;
  }
}

export default GoogleCustomMapPlace;
