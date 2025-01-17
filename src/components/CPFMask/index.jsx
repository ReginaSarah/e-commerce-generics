//import React from "react";

import InputMask from "react-input-mask"

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')


function cpf({ value, onChange }) {

    function handleChange(event){
        onChange({
            ...event,
            target: {
                ...event.target,
                value: onlyNumbers(event.target.value),
            }
        })
    }

    return (
        <InputMask
            mask="999.999.999-99"
            placeholder='Digite seu CPF'
            value={value}
            onChange={handleChange} />
    )
}

export default cpf;