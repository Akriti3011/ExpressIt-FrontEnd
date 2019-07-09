import React, { Component } from "react";
import "../assets/styles/home.css";
import "../assets/styles/basic.css";

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
      <div className="container text-center">
      <div className="row">
      <div className="col-sm-1"></div>
        <div className="col-sm-10">
        <blockquote className="quote">
        &ldquo; Freedom of speech is a human right and the foundation upon which
          democracy is built. Any restriction of freedom of speech is a
          restriction upon democracy. &rdquo;
        </blockquote>
        <div className="quoteBy">-Deeyah Khan</div>
        <a href="/discuss"><button className="btn btn-lg takeMe">Take me there &#10145;</button></a>
      </div>
      </div>
        </div>
      </div>
    );
  }
} 

export default Home;
