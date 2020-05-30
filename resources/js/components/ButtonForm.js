import React, { Component } from "react";

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
            isLoading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id, position } = this.props;

        console.log(id, position);

        if (id) {
            this.setState({
                isLoading: true
            });

            axios
                .get(`/api/dashboard/${id}`)
                .then(({ data: { title, link, color, id, position } }) => {
                    this.setState({
                        title,
                        link,
                        color,
                        id,
                        position,
                        isLoading: false
                    });
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

    handleSubmit(event) {
        event.preventDefault();
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
        const { colors } = this.state;

        const { type } = this.props;

        return (
            <div className="card">
                <div className="card-header">
                    {(type == "edit" && "Edit ") ||
                        (type == "add" && "Add a new ")}
                    button
                </div>
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
                            <div className="col-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    {(type == "edit" && "Edit") ||
                                        (type == "add" && "Submit")}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ButtonForm;
