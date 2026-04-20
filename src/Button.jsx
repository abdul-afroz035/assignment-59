import React from "react";
import { memo } from "react";

function Button({ className, ...rest}) {
    return (
        <button
            {...rest}
            className={ 
                " text-sm py-1 px-3 ml-1 border bg-primary-default hover:bg-primary-dark text-white rounded-lg "
                +
                className
            }


        ></button>
    );
}

export default memo(Button); 