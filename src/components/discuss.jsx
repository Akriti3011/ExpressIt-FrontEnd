import React, { Component } from "react";
import axios from "axios";
import Comment from "./comment";
import CommentForm from "./commentForm";
import "../assets/styles/discuss.css";
import "../assets/styles/basic.css";
import Image from "react-bootstrap/Image";
import emptyImage from "../assets/icons/emptyimage.svg";

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
      <div className="container">
      <div className="row">
      <div className="col-sm-12">
      <h1 className="page-title text-center">A Random controvertial topic</h1>
      </div>
      {/* <div className="col-sm-1"></div> */}
      <div className="col-sm-12">
      <div className="comment-wrapper">
      {/* <Comment
              username="ajads"
              content="zhjzxcbnkvlbknjbhvggbhjn"
              self={false}
            />
             <Comment
              username="ajads"
              content="zhjzxcbnkvlbknjbhvggbhjn"
              self={true}
            />
            <Comment
              username="ajads"
              content="zhjzxcbnkvlbknjbhvggbhjn"
              self={true}
            />
             <Comment
              username="ajads"
              content="zhjzxcbnkvlbknjbhvggbhjn"
              self={false}
            />
            <Comment
              username="ajads"
              content="zhjzxcbnkvlbknjbhvggbhjn"
              self={true}
            />
            <Comment
              username="ajads"
              content="zhjzxcbnkvlbknjbhvggbhjn"
              self={true}
            /> */}
            {this.state.comments.length == 0 &&
             <div className="emptyText">
             <Image src={emptyImage} className="emptyImage"/>
               <div>No comments yet! Be the initiater!</div>
             </div>
            }
          {this.state.comments.length > 0 && this.state.comments.map(comment => (
            <Comment
              key={comment._id}
              username={comment.author}
              content={comment.content}
            />
          ))}
        </div>
      </div>
      <div className="col-sm-12">
          <CommentForm />
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Discuss;
