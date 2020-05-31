import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Loading from "./Loading";

class ButtonForm extends Component {
    constructor() {
        super();
        this.state = {
            colors: [
                { value: "primary", text: "blue" },
                { value: "secondary", text: "dark gray" },
                { value: "success", text: "green" },
                { value: "danger", text: "red" },
                { value: "info", text: "light blue" }
            ],

            title: "",
            link: "",
            color: "primary",
            position: 0,
            id: 0,
            errors: [],
            isLoading: false,
            isButtonLoading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id, position } = this.props;

        if (id) {
            this.setState({
                isLoading: true
            });

            axios.get(`/api/dashboard/buttons/${id}`).then(
                ({ data: { title, link, color, id, position } }) => {
                    this.setState({
                        title,
                        link,
                        color,
                        id,
                        position,
                        isLoading: false
                    });
                },
                ({ response: { status } }) => {
                    status == "404" &&
                        this.props.history.replace({
                            pathname: "/dashboard",
                            state: {
                                alert: {
                                    type: "error",
                                    msgs: [
                                        "Button with this ID doesn't exists."
                                    ]
                                }
                            }
                        });
                }
            );
        } else if (position) {
            this.setState({
                position
            });
        }
    }

    handleInputChange({ target }) {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isButtonLoading: true
        });

        const button = (({ color, title, link, id, position }) => ({
            color,
            title,
            link,
            id,
            position
        }))(this.state);

        this.props.handleSubmit(button);
    }

    render() {
        const { colors, isLoading, isButtonLoading } = this.state;

        const { type } = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    {(type == "edit" && "Edit ") ||
                        (type == "add" && "Add a new ")}
                    button
                </div>
                <div className="card-body">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="link">Link (valid URL)</label>
                                <input
                                    type="url"
                                    pattern="https?://.+"
                                    className="form-control"
                                    id="link"
                                    name="link"
                                    value={this.state.link}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <select
                                    className="form-control text-capitalize"
                                    id="color"
                                    name="color"
                                    value={this.state.color}
                                    onChange={this.handleInputChange}
                                    required
                                >
                                    {colors.map((color, index) => (
                                        <option value={color.value} key={index}>
                                            {color.text}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={isButtonLoading}
                                    >
                                        {(type == "edit" && "Edit") ||
                                            (type == "add" && "Submit")}

                                        {isButtonLoading && (
                                            <Loading isButton={true} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(ButtonForm);
