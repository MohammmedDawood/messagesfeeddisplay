import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import GoogleCustomMapPlace from "./google-custom-map1-places";
import styles from "../styles/Home.module.css";

class GoogleCustomMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 0,
    Entry: [
      {
        message: "It is very hot in, Cairo",
        sentiment: "Neutrual",
        sign: "NA",
        lat: 30.04442,
        lng: 31.235712,
      },
      {
        message: "There is new project started in, Nairobi",
        sentiment: "Positive",
        sign: "+",
        lat: -1.292066,
        lng: 36.821945,
      },
      {
        message:
          "Dubai EXPO 2020 will create a new image for the middle, Dubai",
        sentiment: "Positive",
        sign: "+",
        lat: 25.266666,
        lng: 55.316666,
      },
      {
        message: "I hate black people, there are so many of them in, New York",
        sentiment: "Negative",
        sign: "-",
        lat: 40.712776,
        lng: -74.005974,
      },
      {
        message: "Do you COVID Vaccine, Jeddh, is good?",
        sentiment: "Negative",
        sign: "-",
        lat: 21.543333,
        lng: 39.172779,
      },
    ],
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbtVOKRm4yyb86QyAvgmOWSStNNQQ2KEs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.Entry.map((coords) => (
            // <h1> Created By Dawood {coords.sentiment}</h1>
            <GoogleCustomMapPlace
              key={coords.lat + coords.lng}
              lat={coords.lat}
              lng={coords.lng}
              text={coords.sign}
            />
          ))}
        </GoogleMapReact>

        <footer className={styles.footer}>
          <h1> Created By Dawood Google Map</h1>
        </footer>
      </div>
    );
  }
}

export default GoogleCustomMap;
