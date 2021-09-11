import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import GoogleCustomMapPlace from "./googlecustommapplace";
import data from "../../data";
import smilepin from "../../public/map_smile@3x.png";
import sadpin from "../../public/map_sad@3x.png";
import normalpin from "../../public/map_normal@3x.png";

class GoogleCustomMap extends Component {
  static defaultProps = {};

  // onChildClick callback can take argument: key and display its message and status
  onChildClickCallback = (key) => {
    // console.log(key);
    const itemselected = data.Entry.filter((element) => {
      if (element.id == key) {
        return element;
      }
    });
    // i will add the popup maessage insted of the alert
    alert(
      "sentiment: " +
        itemselected[0]["sentiment"] +
        "\n" +
        "message: " +
        itemselected[0]["message"]
    );
  };

  render() {
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: "100%", width: "90vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: data.mapkey }}
          defaultCenter={data.center}
          defaultZoom={data.zoom}
          onChildClick={this.onChildClickCallback}
        >
          {data.Entry.map((coords) => (
            // <h1> Created By Dawood {coords.sentiment}</h1>
            <GoogleCustomMapPlace
              key={coords.id}
              lat={coords.lat}
              lng={coords.lng}
              // text={coords.sign}
              imageSrc={
                coords.sentiment == "Neutrual"
                  ? normalpin
                  : coords.sentiment == "Positive"
                  ? smilepin
                  : sadpin
              }
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleCustomMap;
