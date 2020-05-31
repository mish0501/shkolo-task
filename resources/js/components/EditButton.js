import React, { Component } from "react";

import Alert from "./Alert";
import ButtonForm from "./ButtonForm";

class EditButton extends Component {
    constructor() {
        super();
        this.state = {
            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({ color, title, link, position, id }) {
        axios
            .put(`/api/dashboard/buttons/${id}`, {
                color,
                title,
                link,
                position
            })
            .then(
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
                ({
                    response: {
                        data: { errors: errorMsgs }
                    }
                }) => {
                    let errors = Object.keys(errorMsgs)
                        .map(key => errorMsgs[key])
                        .reduce((prev, curr) => prev.concat(curr), []);

                    this.setState({
                        errors
                    });
                }
            );
    }

    render() {
        let { errors } = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8">
                    <Alert msgs={errors} type="error" />

                    <ButtonForm
                        handleSubmit={this.handleSubmit}
                        id={this.props.match.params.id}
                        type="edit"
                    />
                </div>
            </div>
        );
    }
}

export default EditButton;
