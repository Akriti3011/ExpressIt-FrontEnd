import React, { Component } from "react";
import "../assets/styles/basic.css";

class Footer extends Component {
  render() {
    return (
     <div style={footerStyle} className="footer-wrapper text-center">
         <p>&copy;ExpressIt 2019</p>
     </div>
    );
  }
}

const footerStyle = {
  marginTop: '40px'
};

export default Footer;
