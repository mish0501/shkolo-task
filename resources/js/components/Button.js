import React, { Component } from "react";

class Button extends Component {
    render() {
        let { title, link, color } = this.props.button;
        return (
            <a
                href={link}
                className={`btn btn-block button d-flex justify-content-center align-items-center btn-${color}`}
            >
                <span className="h5">{title}</span>
            </a>
        );
    }
}

export default Button;
