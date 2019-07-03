import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import "./sign-in.css";
import userLogo from "../assets/icons/user.svg";
import axios from "axios";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    // Call the server
    const { data: jwt } = await axios.post(
      "http://localhost:4000/api/user/login",
      this.state.data
    );
    console.log(jwt);
    localStorage.setItem("jwt-token", jwt);
  };

  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <img className="mb-4" src={userLogo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
          {/* <h1 className="h3 mb-3 font-weight-normal">Login</h1> */}
          <form onSubmit={this.handleSubmit} className="form-signin">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Sign In", "btn btn-lg btn-primary btn-block")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
