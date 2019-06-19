import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import Discuss from "./components/discuss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <br />
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/discuss" component={Discuss} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
