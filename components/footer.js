import React, { Component } from "react";
import styles from "../styles/Home.module.css";

class Footer extends Component {
  static defaultProps = {};

  render() {
    return (
      <footer className={styles.footer}>
        <h1 className={styles.description}> Created By Dawood </h1>
      </footer>
    );
  }
}

export default Footer;
