import React, { Component } from "react";

import Cell from "./Cell";
import Alert from "./Alert";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            buttons: []
        };
    }

    componentDidMount() {
        axios.get("/api/dashboard").then(response => {
            this.setState({
                buttons: response.data
            });
        });
    }

    render() {
        let { buttons } = this.state;

        const { alert } = this.props.location.state || {};
        const msgs = (alert && alert.msgs) || [];
        const type = (alert && alert.type) || "";

        return (
            <React.Fragment>
                <Alert msgs={msgs} type={type} />

                <div className="row justify-content-center row-cols-1 row-cols-sm-3">
                    {buttons.map(button => (
                        <Cell button={button} key={button.position} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
