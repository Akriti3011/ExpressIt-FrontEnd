import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { username, content } = this.props;
    return (
      <div className="media mb-3">
        {/* <img
          className="mr-3 bg-light rounded"
          width="48"
          height="48"
          src={`https://api.adorable.io/avatars/48/${username.toLowerCase()}@adorable.io.png`}
          alt={username}
        /> */}

        <div className="media-body p-2 shadow-sm rounded bg-light border">
          {/* <small className="float-right text-muted">{time}</small> */}
          <h6 className="mt-0 mb-1 text-muted">{username}</h6>
          {content}
        </div>
      </div>
    );
  }
}

export default Comment;
