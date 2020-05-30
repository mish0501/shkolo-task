import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

class Button extends Component {
    render() {
        let { title, link, color, position, id } = this.props.button;
        return (
            <div>
                <a
                    href={link}
                    className={`btn btn-block button d-flex justify-content-center align-items-center btn-${color}`}
                >
                    <span className="h5">{title}</span>
                </a>

                <Link
                    to={{
                        pathname: `/dashboard/button/edit/${id}`
                    }}
                    className={`menu btn btn-sm btn-${color}`}
                >
                    <FontAwesomeIcon icon={faPen} />
                </Link>
            </div>
        );
    }
}

export default Button;
