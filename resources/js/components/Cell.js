import React, { Component } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import AddButton from "./AddButton";

class Cell extends Component {
    render() {
        let button = this.props.button;
        return (
            <div className="col-12 col-sm-4 my-3 my-sm-0">
                <div className="card h-100">
                    <div className="card-body p-0">
                        {button.link ? (
                            <Button button={button} />
                        ) : (
                            <AddButton />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cell;
