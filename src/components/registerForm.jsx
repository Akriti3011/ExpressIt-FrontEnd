import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import "./sign-in.css";
import regUser from "../icons/add-user.svg";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <img className="mb-4" src={regUser} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Don't be a stranger</h1>
          <p>Join ExpressIt and let the others know what you think</p>
          <form onSubmit={this.handleSubmit} className="form-signin">
            {this.renderInput("name", "User Name")}
            {this.renderInput("username", "Email Id")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Register", "btn btn-lg btn-primary btn-block")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
