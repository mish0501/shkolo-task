import React from "react";

import Button from "./Button";
import AddButton from "./AddButton";

function Cell({ button }) {
    let position = button.position ? ` order-${button.position}` : "";

    return (
        <div className={`col mb-3${position}`}>
            <div className="card h-100">
                <div className="card-body p-0">
                    {button.link ? (
                        <Button button={button} />
                    ) : (
                        <AddButton position={button.position} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cell;
