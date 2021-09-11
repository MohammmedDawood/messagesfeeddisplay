import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";
import leafletstyles from "../../styles/leaflet.module.css";
import "leaflet/dist/leaflet.css";
import data from "../../data";
import smilepin from "../../public/map_smile@3x.png";
import sadpin from "../../public/map_sad@3x.png";
import normalpin from "../../public/map_normal@3x.png";

class LeafletCustomMap extends Component {
  static defaultProps = {};

  render() {
    return (
      <div>
        <MapContainer
          className={leafletstyles.leafletmap}
          center={data.leafletcenter}
          zoom={data.zoom}
          dragging={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          attributionControl={true}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.Entry.map((coords) => (
            <Marker
              key={coords.id}
              position={[coords.lat, coords.lng]}
              icon={icon({
                iconUrl:
                  coords.sentiment == "Neutrual"
                    ? normalpin.src
                    : coords.sentiment == "Positive"
                    ? smilepin.src
                    : sadpin.src,
                iconSize: [32, 32],
              })}
            >
              <Popup>
                {coords.sentiment} <br /> {coords.message}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  }
}

export default LeafletCustomMap;
