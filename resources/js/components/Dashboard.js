import React, { Component } from "react";

import Cell from "./Cell";
import Alert from "./Alert";

import FetchButtonsContext from "../context/fetch-buttons-context";
import Loading from "./Loading";

class Dashboard extends Component {
    constructor() {
        super();

        this.fetchButtons = () => {
            this.setState({
                isLoading: true
            });

            axios.get("/api/dashboard/buttons").then(response => {
                this.setState({
                    buttons: response.data,
                    isLoading: false
                });
            });
        };

        this.state = {
            buttons: [],
            fetchButtons: this.fetchButtons,
            isLoading: false
        };
    }

    componentDidMount() {
        this.fetchButtons();
    }

    render() {
        let { buttons, isLoading } = this.state;

        const { alert } = this.props.location.state || {};
        const msgs = (alert && alert.msgs) || [];
        const type = (alert && alert.type) || "";

        return (
            <FetchButtonsContext.Provider value={this.state}>
                <Alert msgs={msgs} type={type} />

                <div className="row justify-content-center row-cols-1 row-cols-sm-3">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        buttons.map(button => (
                            <Cell button={button} key={button.position} />
                        ))
                    )}
                </div>
            </FetchButtonsContext.Provider>
        );
    }
}

export default Dashboard;
