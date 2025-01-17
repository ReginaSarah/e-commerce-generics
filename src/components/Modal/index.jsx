//import React from "react";

import './style.css'


function modal({ isOpen, children }) {

    if(isOpen){
        return (
            <div className='background-modal'>
                <div className="minha-modal" >
                    {children}
                </div>
            </div>
        )
    }

    return null

    
}

export default modal;