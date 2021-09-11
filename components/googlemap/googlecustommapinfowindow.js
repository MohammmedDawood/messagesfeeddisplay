import React, { Component } from "react";
import googlemapstyles from "../../styles/googlemap.module.css";

class GoogleCustomMapInfoWindow extends Component {
  static defaultProps = { place };
  // static { place } = props;
  render() {
    return (
      <div className={googlemapstyles.infowindow}>
        <div style={{ fontSize: 16 }}>{place.name}</div>
        <div style={{ fontSize: 14 }}>
          <span style={{ color: "grey" }}>{place.rating} </span>
          <span style={{ color: "orange" }}>
            {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
          </span>
          <span style={{ color: "lightgrey" }}>
            {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
          </span>
        </div>
        <div style={{ fontSize: 14, color: "grey" }}>{place.types[0]}</div>
        <div style={{ fontSize: 14, color: "grey" }}>
          {"$".repeat(place.price_level)}
        </div>
        <div style={{ fontSize: 14, color: "green" }}>
          {place.opening_hours.open_now ? "Open" : "Closed"}
        </div>
      </div>
    );
  }
}

export default GoogleCustomMapInfoWindow;
