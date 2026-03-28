import React from "react";

function Button(props) {
    return (
        <button
            {...props}
            className=" text-sm py-1 px-3 ml-1 border bg-primary-default hover:bg-primary-dark text-white rounded-lg "

        ></button>
    );
}

export default Button; 