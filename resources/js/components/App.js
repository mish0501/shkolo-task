import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import AddButtonForm from "./AddButtonForm";
import EditButtonForm from "./EditButtonForm";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <Link className="navbar-brand mb-0 h1" to="/dashboard">
                        <img
                            src="https://app.shkolo.bg/img/logo.png"
                            alt="Shkolo logo"
                        />
                    </Link>
                </nav>
                <div className="container">
                    <Switch>
                        <Route
                            path="/dashboard/button/add/:position"
                            component={AddButtonForm}
                        />
                        <Route
                            path="/dashboard/button/edit/:id"
                            component={EditButtonForm}
                        />
                        <Redirect exact from="/" to="/dashboard" />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
