import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cell from "./Cell";

class App extends Component {
    render() {
        let buttons = [
            [
                {
                    title: "primary",
                    link: "#",
                    color: "primary"
                },
                {},
                {
                    title: "warning",
                    link: "#",
                    color: "warning"
                }
            ],
            [
                {},
                {
                    title: "success",
                    link: "#",
                    color: "success"
                },
                {}
            ],
            [
                {},
                {
                    title: "info",
                    link: "#",
                    color: "info"
                },
                {}
            ]
        ];

        return (
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                </nav>
                <div className="container">
                    {buttons.map((row, rowIndex) => (
                        <div
                            className={`row justify-content-center ${
                                rowIndex > 0 ? "mt-0 mt-sm-4" : ""
                            }`}
                            key={rowIndex}
                        >
                            {row.map((cell, cellIndex) => (
                                <Cell
                                    button={cell}
                                    key={cellIndex + rowIndex}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
