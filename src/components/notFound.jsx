import React from "react";
import ntFndImg from "../assets/icons/notFound.svg";
import Image from "react-bootstrap/Image";
import "../assets/styles/notFound.css";
import "../assets/styles/basic.css";

const NotFound = () => {
  return (
    <div className="container">
    <div className="row">
    <div className="notFound">
      <Image className="notFoundImage"
        src={ntFndImg}
        alt="IAF Not Found"
      />
         <h1 className="not-found-page-title">404 uh-oh!</h1>
      <h5>You might be going somewhere else!</h5>
      <a href="/home"><button className="btn btn-md home">
            <span>Back to Home</span>
          </button></a>
    </div>
     </div>
     </div>
  );
};

export default NotFound;
