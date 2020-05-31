import React from "react";

function Loading({ isButton = false }) {
    return !isButton ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : (
        <React.Fragment>
            <span
                className="spinner-border spinner-border-sm ml-2 align-middle"
                role="status"
                aria-hidden="true"
            ></span>
        </React.Fragment>
    );
}

export default Loading;
