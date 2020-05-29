import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
    render() {
        let { title, link, color } = this.props.button;
        return (
            <a
                href={link}
                className={`btn btn-block d-table button btn-${color}`}
                role="button"
            >
                <span className="d-table-cell align-middle h5">{title}</span>
            </a>
        );
    }
}

export default Button;
