import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import NotFound from "./components/notFound";
import Discuss from "./components/discuss";
import Navigation from "./components/navigation";
import "./assets/styles/basic.css";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navigation />
        <main className="body-content">
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
