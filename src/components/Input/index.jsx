//import React from "react";


function input({ value, onChange, label, type, name }) {

    return (
        <input
            type={type}
            name={name}
            placeholder={label}
            value={value}
            onChange={onChange} />
    )
}

export default input;