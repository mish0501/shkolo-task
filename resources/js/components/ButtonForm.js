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
            isButtonLoading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { button, position } = this.props;

        if (button) {
            this.setState({
                color: button.color,
                title: button.title,
                link: button.link,
                id: button.id,
                position: button.position
            });
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

    async handleSubmit(event) {
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

        await this.props.handleSubmit(button);

        this.setState({
            isButtonLoading: false
        });
    }

    render() {
        const { colors, isButtonLoading } = this.state;

        const { type, isLoading } = this.props;

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
