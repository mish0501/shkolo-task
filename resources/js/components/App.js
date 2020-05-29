import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                </nav>
                <div className="container">
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
