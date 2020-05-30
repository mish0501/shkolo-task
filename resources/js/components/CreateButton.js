import React, { Component } from "react";

import Alert from "./Alert";
import ButtonForm from "./ButtonForm";

class CreateButton extends Component {
    constructor() {
        super();
        this.state = {
            errors: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange({ target }) {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit({ color, title, link, position }) {
        axios
            .post("/api/dashboard", {
                color,
                title,
                link,
                position
            })
            .then(
                ({ data }) => {
                    if (data.type == "success") {
                        this.props.history.replace({
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
                        type="add"
                        position={this.props.match.params.position}
                    />
                </div>
            </div>
        );
    }
}

export default CreateButton;
