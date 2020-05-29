import React, { Component } from "react";
import Cell from "./Cell";

class AddButtonForm extends Component {
    constructor() {
        super();
        this.state = {
            colors: [
                { value: "primary", text: "blue" },
                { value: "secondary", text: "dark gray" },
                { value: "success", text: "green" },
                { value: "danger", text: "red" },
                { value: "warning", text: "yellow" },
            ],

            title: "",
            link: "",
            color: "primary",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange({ target }) {
        const { name, value } = target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        let { position } = this.props.match.params;

        let { colors } = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8">
                    <div className="card">
                        <div className="card-header">Add new button</div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={this.state.title}
                                        placeholder="Google"
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="link">Link</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="link"
                                        name="link"
                                        value={this.state.link}
                                        placeholder="https://google.com"
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
                                            <option
                                                value={color.value}
                                                key={index}
                                            >
                                                {color.text}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddButtonForm;
