import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import "../assets/styles/basic.css";
import "../assets/styles/comment.css";

class Comment extends Component {
  render() {
    const { username, content, self } = this.props;
    return (
      <div>
      <div className="row">
      {self &&
      <div className="col-sm-4"></div>
      }
      <div className="col-sm-8 comment-container">
      <div className="row">
      <div className="col-sm-1">
      <Image
          width="48"
          height="48"
          src={`https://api.adorable.io/avatars/48/${username.toLowerCase()}@adorable.io.png`}
          alt="AB" roundedCircle
        />
        </div>
        <div className="col-sm-11 float-left">
          <span className="name">{username} &nbsp; &nbsp;</span>
          <span className="time text-muted"> 2 min ago</span>
          <div className={"comment " + (self ? 'self-comment': 'others-comment')}>shdfvmb,lnhgfdeftgyhujiklkojhuytfrdftgsjdhbewhjdcb
          kjedchfsjfhvifjvnbjdfnvujr
          ekjfchesfhuyerhfierhfvmkjbhdmkfdjhgvhbjnrfgvbhjky</div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Comment;
