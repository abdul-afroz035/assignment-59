import React from "react";
import { ImSpinner9 } from "react-icons/im";


function Loading() {
    return (
        <div className="flex h-full mx-3 justify-center items-center ">
            <ImSpinner9 className="text-primary-default text-3xl animate-spin" />
        </div>
    );
}
export default Loading;