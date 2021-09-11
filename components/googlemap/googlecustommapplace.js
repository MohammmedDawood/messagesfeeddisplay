import React, { Component } from "react";
import googlemapstyles from "../../styles/googlemap.module.css";
import Image from "next/image";

class GoogleCustomMapPlace extends Component {
  static defaultProps = {};

  render() {
    return (
      <div className={googlemapstyles.marker}>
        {/* {this.props.text} */}
        <Image src={this.props.imageSrc} alt="Picture of the author" />
      </div>
    );
  }
}

export default GoogleCustomMapPlace;
