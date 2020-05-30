import React, { Component } from "react";

class EditButtonForm extends Component {
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
            id: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios
            .get(`/api/dashboard/${id}`)
            .then(({ data: { title, link, color, id, position } }) => {
                this.setState({
                    title,
                    link,
                    color,
                    id,
                    position
                });
            });
    }

    handleInputChange({ target }) {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const { color, title, link, position, id } = this.state;
        event.preventDefault();

        axios
            .put(`/api/dashboard/${id}`, {
                color,
                title,
                link,
                position
            })
            .then(
                ({ data }) => {
                    if (data.type == "success") {
                        this.props.history.replace("/dashboard");
                    }
                },
                error => {
                    console.error(error);
                }
            );
    }

    handleDelete(event) {
        const { id } = this.state;
        event.preventDefault();

        axios.delete(`/api/dashboard/${id}`).then(
            ({ data }) => {
                if (data.type == "success") {
                    this.props.history.replace("/dashboard");
                }
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
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

                                <div className="row">
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                        >
                                            Еdit
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button
                                            className="btn btn-danger btn-block"
                                            onClick={this.handleDelete}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditButtonForm;
