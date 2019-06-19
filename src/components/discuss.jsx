import React, { Component } from "react";
import axios from "axios";
import Comment from "./comment";
import CommentForm from "./commentForm";

class Discuss extends Component {
  state = {
    comments: []
  };

  async componentDidMount() {
    const comments = await axios.get("http://localhost:4000/api/comment");
    this.setState({ comments: comments.data });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">A Random controvertial topic</h1>
        <br />
        <div style={{ overflowY: "scroll", height: "400px" }}>
          {this.state.comments.map(comment => (
            <Comment
              key={comment._id}
              username={comment.author}
              content={comment.content}
            />
          ))}
        </div>
        <br />
        <div>
          <CommentForm />
        </div>
      </div>
    );
  }
}

export default Discuss;
