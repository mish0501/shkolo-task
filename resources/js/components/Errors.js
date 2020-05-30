import React, { Component } from "react";

class Errors extends Component {
    render() {
        const { errors } = this.props;
        return (
            <div className="alert alert-danger errorMsg" role="alert">
                {errors.map((error, index) => (
                    <p key={index}> {error} </p>
                ))}
            </div>
        );
    }
}

export default Errors;
