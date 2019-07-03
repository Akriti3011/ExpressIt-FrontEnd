import React from "react";
import ntFndImg from "../assets/icons/IAF.jpg";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404 Not Found</h1>
      <img
        style={{ backgroundImage: `url(${ntFndImg})` }}
        src={ntFndImg}
        alt="IAF Not Found"
      />
      <br />
      <br />
      <h1>Much like this plane, the page you are looking for is not found</h1>
    </div>
  );
};

export default NotFound;
