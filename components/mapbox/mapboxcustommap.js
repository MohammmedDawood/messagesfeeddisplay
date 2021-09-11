import React, { Component } from "react";
import mapboxstyles from "../../styles/mapbox.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../../data";
import smilepin from "../../public/map_smile@3x.png";
import sadpin from "../../public/map_sad@3x.png";
import normalpin from "../../public/map_normal@3x.png";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9oYW1tZWRkYXdvb2QiLCJhIjoiY2pucXBzNGVlMDA0ODNwbGw4eGs2aWI2eiJ9.k-fw0WDYmMIgk8XHHDIyzw";

class MapboxCustomMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }
  static defaultProps = {};

  componentDidMount() {
    // const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [data.center.lng, data.center.lat],
      zoom: data.zoom - 2,
    });
    // Create a new markers.
    data.Entry.map((coords) => {
      var element = document.createElement("div");
      element.className = mapboxstyles.marker;

      // adding images for markers
      console.log(normalpin.src);
      element.style.backgroundImage =
        coords.sentiment == "Neutrual"
          ? `url(${normalpin.src})`
          : coords.sentiment == "Positive"
          ? `url(${smilepin.src})`
          : `url(${sadpin.src})`;
      element.style.backgroundSize = "100%";
      new mapboxgl.Marker(element)
        .setLngLat([coords.lng, coords.lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `${coords.sentiment} <br /> ${coords.message}`
          )
        )
        .addTo(map);
    });
  }

  render() {
    return (
      <div>
        <div ref={this.mapContainer} className={mapboxstyles.mapcontainer} />
      </div>
    );
  }
}

export default MapboxCustomMap;
