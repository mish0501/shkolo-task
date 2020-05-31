import React from "react";
import { Link } from "react-router-dom";

function AddButton({ position }) {
    return (
        <Link
            to={{
                pathname: `/dashboard/button/add/${position}`
            }}
            className="btn btn-white btn-block button"
        >
            <span className="text-black-50 display-4">+</span>
        </Link>
    );
}

export default AddButton;
