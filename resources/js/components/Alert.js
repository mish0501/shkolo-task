import React, { Component } from "react";

class Alert extends Component {
    render() {
        const { msgs, type } = this.props;

        let alertType;

        if (type == "error") {
            alertType = "alert-danger";
        } else if (type == "success") {
            alertType = "alert-success";
        }

        return (
            msgs.length > 0 && (
                <div className={`alert ${alertType} alertMsg`} role="alert">
                    {msgs.map((msg, index) => (
                        <p key={index}> {msg} </p>
                    ))}
                </div>
            )
        );
    }
}

export default Alert;
