import React, { Component } from "react";
import Cell from "./Cell";

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
                buttons: JSON.parse(response.data)
            });
        });
    }

    render() {
        let { buttons } = this.state;
        return (
            <div className="row justify-content-center row-cols-1 row-cols-sm-3">
                {buttons.map(button => (
                    <Cell button={button} key={button.position} />
                ))}
            </div>
        );
    }
}

export default Dashboard;
