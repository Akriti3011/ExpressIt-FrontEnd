import React, { Component } from "react";
import axios from "axios";

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
        <div className="form-group">
          <button
            className="btn btn-sm btn-primary"
            style={{ float: "right", width: "5%", height: "45px" }}
          >
            post
          </button>
          <textarea
            style={{ overflowY: "scroll", height: "45px", width: "95%" }}
            onChange={this.handleChange}
            value={this.state.comment}
            className="form-control"
            placeholder="🤬 Your Comment"
            name="content"
            rows="5"
          />
        </div>
      </form>
    );
  }
}

export default CommentForm;
