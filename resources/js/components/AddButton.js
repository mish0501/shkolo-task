import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
    render() {
        return (
            <a
                href="#"
                className="btn btn-white btn-block button"
                role="button"
            >
                <span className="text-black-50 display-4">+</span>
            </a>
        );
    }
}

export default Button;
