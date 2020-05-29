import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
    render() {
        let { position } = this.props;

        return (
            <Link
                to={{
                    pathname: `/dashboard/button/add/${position}`
                }}
                className="btn btn-white btn-block button"
            >
                <span className="text-black-50 display-4">+</span>
            </Link>
        );
    }
}

export default Button;
