import React, { Component } from "react";

import Alert from "./Alert";
import ButtonForm from "./ButtonForm";

class EditButton extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            isLoading: false,
            button: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        const id = this.props.match.params.id;

        axios.get(`/api/dashboard/buttons/${id}`).then(
            ({ data: { title, link, color, id, position } }) => {
                this.setState({
                    button: {
                        title,
                        link,
                        color,
                        id,
                        position
                    },
                    isLoading: false
                });
            },
            ({ response: { status } }) => {
                status == "404"
                    ? this.props.history.replace({
                          pathname: "/dashboard",
                          state: {
                              alert: {
                                  type: "error",
                                  msgs: ["Button with this ID doesn't exists."]
                              }
                          }
                      })
                    : this.setState({
                          isLoading: false,
                          errors: ["Server error"]
                      });
            }
        );
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
                ({ response: { data, status } }) => {
                    console.log("error");

                    if (status == "404") {
                        this.setState({
                            errors: ["Button with this ID doesn't exists."]
                        });
                        console.log("404");
                    } else if (data.errors) {
                        let errors = Object.keys(data.errors)
                            .map(key => data.errors[key])
                            .reduce((prev, curr) => prev.concat(curr), []);

                        this.setState({
                            errors
                        });
                        console.log("validation");
                    } else {
                        this.setState({
                            errors: ["Server error"]
                        });
                        console.log("server");
                    }
                }
            );
    }

    render() {
        let { errors, isLoading, button } = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8">
                    <Alert msgs={errors} type="error" />

                    {Object.keys(button).length !== 0 && (
                        <ButtonForm
                            handleSubmit={this.handleSubmit}
                            button={button}
                            type="edit"
                            isLoading={isLoading}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default EditButton;
