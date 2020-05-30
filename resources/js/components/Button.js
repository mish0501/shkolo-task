import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Button extends Component {
    constructor() {
        super();

        this.handelDeleteClick = this.handelDeleteClick.bind(this);
    }

    handelDeleteClick() {
        const { id } = this.props.button;

        axios.delete(`/api/dashboard/${id}`).then(
            ({ data }) => {
                if (data.type == "success") {
                    this.props.history.push({
                        pathname: "/dashboard",
                        state: {
                            alert: data
                        }
                    });
                }
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
        const { title, link, color, id } = this.props.button;
        return (
            <div>
                <a
                    href={link}
                    className={`btn btn-block button d-flex justify-content-center align-items-center btn-${color}`}
                    target="_blank"
                >
                    <span className="h5 text-truncate">{title}</span>
                </a>

                <Link
                    to={{
                        pathname: `/dashboard/button/edit/${id}`
                    }}
                    className={`menu menu-edit btn btn-sm btn-${color}`}
                >
                    <FontAwesomeIcon icon={faPen} />
                </Link>

                <div
                    to={{
                        pathname: `/dashboard/button/edit/${id}`
                    }}
                    className={`menu btn btn-sm btn-${color}`}
                    onClick={this.handelDeleteClick}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
            </div>
        );
    }
}

export default withRouter(Button);
