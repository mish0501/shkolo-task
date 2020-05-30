import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import CreateButton from "./CreateButton";
import EditButton from "./EditButton";

class App extends Component {
    componentWillMount() {
        window.history.replaceState({}, "");
    }

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <Link className="navbar-brand mb-0 h1" to="/dashboard">
                        <img src="/img/logo.png" alt="Shkolo logo" />
                    </Link>
                </nav>
                <div className="container">
                    <Switch>
                        <Route
                            path="/dashboard/button/add/:position"
                            component={CreateButton}
                        />
                        <Route
                            path="/dashboard/button/edit/:id"
                            component={EditButton}
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
