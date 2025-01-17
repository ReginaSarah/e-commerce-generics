//import React from "react";

import './style.css'
import CircumIcon from "@klarr-agency/circum-icons-react"; // React


function modal() {

    let modal = document.getElementById('minha-modal');
    let abrirModal = document.getElementById('abrir-modal');
    let fecharModal = document.getElementById('fechar-modal');

 

    

    return (
        <div>
            <button id="abrir-modal" ><CircumIcon name="trash" color="#FFF" size="20px" /></button>

            <dialog open="true" id="minha-modal">
                <h5>Deseja realmente excluir este usuário?</h5>
                <p>Essa é uma simples maneira de criar uma modal</p>
                <button id="fechar-modal">Não</button>
                <button id="fechar-modal">Sim</button>
            </dialog>
        </div>
    )
}

export default modal;