import React, { Component } from "react";

import Cell from "./Cell";
import Alert from "./Alert";

import FetchButtonsContext from "../context/fetch-buttons-context";

class Dashboard extends Component {
    constructor() {
        super();

        this.fetchButtons = () => {
            axios.get("/api/dashboard/buttons").then(response => {
                this.setState({
                    buttons: response.data
                });
            });
        };

        this.state = {
            buttons: [],
            fetchButtons: this.fetchButtons
        };
    }

    componentDidMount() {
        this.fetchButtons();
    }

    render() {
        let { buttons } = this.state;

        const { alert } = this.props.location.state || {};
        const msgs = (alert && alert.msgs) || [];
        const type = (alert && alert.type) || "";

        return (
            <FetchButtonsContext.Provider value={this.state}>
                <Alert msgs={msgs} type={type} />

                <div className="row justify-content-center row-cols-1 row-cols-sm-3">
                    {buttons.map(button => (
                        <Cell button={button} key={button.position} />
                    ))}
                </div>
            </FetchButtonsContext.Provider>
        );
    }
}

export default Dashboard;
