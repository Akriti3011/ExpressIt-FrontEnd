import React, { Component } from "react";
import axios from "axios";
import "../assets/styles/basic.css";
import "../assets/styles/commentForm.css";

class CommentForm extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    let comment = e.target.value;
    this.setState({ comment });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.comment);
    const jwt = localStorage.getItem("jwt-token");
    console.log(jwt);
    const commentdata = { content: this.state.comment };
    axios.post("http://localhost:4000/api/comment", commentdata, {
      headers: { "auth-token": jwt }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group comment-box-wrapper">
        <div className="row">
          <div className="col-sm-11">
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
            className="form-control comment-box"
            placeholder="Your Comment"
            name="content"
            rows="5"
          />
          </div>
          <div className="col-sm-1">
          <button className="btn comment-button float-right">
            <span>&#10148;</span>
          </button>
          </div>
        </div> 
        </div>
      </form>
    );
  }
}

export default CommentForm;
